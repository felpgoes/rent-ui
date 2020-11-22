import React, { PureComponent } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { InfiniteLoader, List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized'

import css from 'dom-css'

import { isMobile } from '../../../utils/mobile'

import CardHelper from '../../molecules/CardHelper'

const shadowStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  height: 10
}

export default class InfiniteGrid extends PureComponent {
  state = {
    clear: false
    // loadedRowsMap: []
  }

  cache = new CellMeasurerCache({
    defaultHeight: 200,
    fixedWidth: true
  })

  // clearData = () => {
  //   this.setState({
  //     loadedRowsMap: []
  //   })
  // }

  componentDidUpdate(prevProps, prevState) {
    const { clear } = this.state
    // const { initialLoading } = this.props

    // console.log('list.length', list.length)
    // console.log('clear', clear)
    // console.log('this.list.Grid', this.list.Grid)

    // if (!initialLoading && initialLoading !== prevProps.initialLoading) {
    //   console.log('scrollToRow', this.list)
    //   this.list.scrollToRow(0)
    // }

    // if (list.length === 0 && list.length !== prevProps.list.length) {
    if (clear && !prevState.clear) {
      // console.log('resetLoadMoreRowsCache')
      // this.list.scrollToRow(0)
      this.infiniteLoader.resetLoadMoreRowsCache(true)
    }
  }

  isRowLoaded = ({ index }) => {
    // const { loadedRowsMap } = this.state
    // return !!loadedRowsMap[index]

    // console.log('loadedRows: ', this.loadedRows, 'index: ', index)

    return this.loadedRows > index + 1
  }

  loadMoreRows = () => {
    // startIndex, stopIndex
    // const { loadedRowsMap } = this.state
    const { list, totalCount, fetchMoreItems } = this.props
    // const arr = [...loadedRowsMap]

    // for (let index = startIndex; index < stopIndex; index++) {
    //   arr[index] = 'LOADING'
    // }

    // this.setState({
    //   loadedRowsMap: arr
    // })

    if (totalCount - 50 <= 0) return

    // console.log(`fetchMoreItems(${startIndex}, ${stopIndex})`)

    const page = Math.floor(list.length / 50 + 1)

    fetchMoreItems(page)
    // this.props.fetchMoreItems(startIndex, stopIndex)
  }

  handleScroll = e => {
    this.list.Grid._onScroll(e)
  }

  handleUpdate = values => {
    const { shadowTop, shadowBottom } = this
    const { scrollTop, scrollHeight, clientHeight } = values

    const shadowTopOpacity = (1 / 20) * Math.min(scrollTop, 20)

    const bottomScrollTop = scrollHeight - clientHeight

    const shadowBottomOpacity =
      (1 / 20) * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20))

    css(shadowTop, { opacity: shadowTopOpacity })
    css(shadowBottom, { opacity: shadowBottomOpacity })
  }

  componentDidMount = () => {
    this.list.Grid._scrollingContainer = this.scroll.view
    // this.list.Grid.state.scrollTop = 0
  }

  rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    parent,
    style // Style object to be applied to row (to position it)
  }) => {
    const { list, Item, cardWidth, cardHeight, totalCount } = this.props

    const items = []
    const fromIndex = index * this.itemsPerRow
    const toIndex = Math.min(fromIndex + this.itemsPerRow, list.length)

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(<Item {...this.props} data={list[i]} index={i} />)
    }

    if (fromIndex + this.itemsPerRow > list.length && fromIndex < list.length) {
      for (let i = list.length; i < fromIndex + this.itemsPerRow; i++) {
        items.push(
          <CardHelper
            cardWidth={cardWidth}
            productCard={totalCount - list.length !== 0}
            style={{
              height: cardHeight,
              minWidth: cardWidth - 10
            }}
          />
        )
      }
    }

    if (index === this.rowCount - 1 && totalCount - list.length !== 0) {
      for (let i = fromIndex; i < fromIndex + this.itemsPerRow; i++) {
        items.push(
          <CardHelper
            cardWidth={cardWidth}
            productCard={totalCount - i > 0}
            style={{
              height: cardHeight,
              minWidth: cardWidth - 10
            }}
          />
        )
      }
    }

    return (
      <CellMeasurer key={key} cache={this.cache} parent={parent} columnIndex={0} rowIndex={index}>
        {() => {
          // measure
          return (
            <div
              style={{
                ...style,
                display: 'flex',
                justifyContent: 'space-around',
                padding: '10px 0',
                minHeight: cardHeight + 20
              }}
            >
              {items.length
                ? items
                : Array(this.itemsPerRow).fill(
                    <CardHelper
                      cardWidth={cardWidth}
                      productCard
                      style={{
                        height: cardHeight,
                        minWidth: cardWidth - 10
                      }}
                    />
                  )}
              {/* {items.length ? items : <div style={{ minHeight: 320 }}>Loading...</div>} */}
            </div>
          )
        }}
      </CellMeasurer>
    )
  }

  render() {
    const { style, cardWidth, Item, list, totalCount, clearCache, ...props } = this.props

    if (clearCache) this.setState({ clear: true })

    return (
      <InfiniteLoader
        ref={node => {
          this.infiniteLoader = node
        }}
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.loadMoreRows}
        rowCount={this.rowCount}
        threshold={1}
        minimumBatchSize={0}
      >
        {({ registerChild, onRowsRendered }) => (
          <AutoSizer>
            {({ height, width }) => {
              this.itemsPerRow = Math.floor((width || cardWidth) / cardWidth)
              this.rowCount = Math.ceil((totalCount || list.length) / this.itemsPerRow)
              this.loadedRows = Math.ceil(list.length / this.itemsPerRow)

              // console.log('totalCount', totalCount)
              // console.log('loadedRows', this.loadedRows)
              // console.log('itemsPerRow', this.itemsPerRow)
              // console.log('rowCount', this.rowCount)

              return (
                <>
                  <Scrollbars
                    {...props}
                    autoHide
                    ref={node => {
                      this.scroll = node
                    }}
                    onScroll={this.handleScroll}
                    onUpdate={this.handleUpdate}
                    style={{ height, width, marginBottom: isMobile() ? 16 : 60 }}
                  >
                    <List
                      {...this.props}
                      ref={node => {
                        this.list = node
                        return registerChild
                      }}
                      onRowsRendered={onRowsRendered}
                      style={{ overflowX: 'visible', overflowY: 'visible' }}
                      rowRenderer={this.rowRenderer}
                      overscanRowCount={10}
                      deferredMeasurementCache={this.cache}
                      rowCount={this.rowCount}
                      rowHeight={this.cache.rowHeight}
                      height={height}
                      width={width}
                      scrollToIndex={0}
                      // scrollToRow={0}
                      // scrollTop={loading && 0}
                    />
                  </Scrollbars>

                  <div
                    ref={node => {
                      this.shadowTop = node
                    }}
                    style={{
                      ...shadowStyle,
                      top: 0,
                      background:
                        'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)'
                    }}
                  />

                  <div
                    ref={node => {
                      this.shadowBottom = node
                    }}
                    style={{
                      ...shadowStyle,
                      bottom: 0,
                      background:
                        'linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)'
                    }}
                  />
                </>
              )
            }}
          </AutoSizer>
        )}
      </InfiniteLoader>
    )
  }
}

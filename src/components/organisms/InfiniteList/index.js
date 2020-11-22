import React, { PureComponent } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { InfiniteLoader, List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized'
import css from 'dom-css'

import { isMobile } from '../../../utils/mobile'

const shadowStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  height: 10
}

export default class InfiniteList extends PureComponent {
  timeoutIdMap = {}

  cache = new CellMeasurerCache({
    defaultHeight: 200,
    fixedWidth: true
  })

  isRowLoaded = ({ index }) => {
    const { list } = this.props

    return !!list[index]
  }

  loadMoreRows = ({ startIndex, stopIndex }) => {
    const { list, totalCount, fetchMoreItems } = this.props

    if (totalCount - 50 <= 0) return

    const page = Math.floor(list.length / 50 + 1)

    fetchMoreItems(page)
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
  }

  rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    parent,
    style // Style object to be applied to row (to position it)
  }) => {
    const { list, Item } = this.props

    return (
      <CellMeasurer key={key} cache={this.cache} parent={parent} columnIndex={0} rowIndex={index}>
        {({ measure }) => {
          return (
            <div style={style}>
              <Item
                {...this.props}
                data={list[index]}
                index={index}
                // redirectTo={redirectTo}
                forceUpdate={i => {
                  this.cache.clear(i)
                  this.list.recomputeRowHeights()
                }}
              />
            </div>
          )
        }}
      </CellMeasurer>
    )
  }

  render() {
    const { style, ...props } = this.props

    return (
      <InfiniteLoader
        isRowLoaded={() => this.isRowLoaded}
        loadMoreRows={() => this.loadMoreRows}
        rowCount={props.list.length}
      >
        {({ registerChild, onRowsRendered }) => (
          <AutoSizer>
            {({ height, width }) => (
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
                    style={{ overflowX: 'visible', overflowY: 'visible' }}
                    onRowsRendered={onRowsRendered}
                    rowRenderer={this.rowRenderer}
                    overscanRowCount={3}
                    deferredMeasurementCache={this.cache}
                    rowCount={props.list.length}
                    rowHeight={this.cache.rowHeight}
                    height={height}
                    width={width}
                    scrollToIndex={0}
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
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    )
  }
}

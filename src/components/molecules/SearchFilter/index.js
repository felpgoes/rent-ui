import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input'

import { Container, SearchBox } from './styles'
import WrapperFlex from '../WrapperFlex'
import SearchIcon from '../../icons/SearchIcon'

class SearchFilter extends Component {
  state = {
    query: ''
  }

  componentDidMount() {
    this.setState({ query: '' })
  }

  handleSearch = query => {
    const { filterData } = this.props
    const trimmedQuery = query.trimStart().replace(/\s+/g, ' ')

    if (trimmedQuery === '') {
      this.setState({ query: '' })
      filterData('')
    } else {
      this.setState({ query: trimmedQuery })
      filterData(trimmedQuery.toLowerCase().trim())
    }
  }

  render() {
    const { text, loading, rectBorder, minLength, noBg, debounce } = this.props
    const { query } = this.state

    return (
      <Container {...this.props} noBg={noBg}>
        <SearchBox rectBorder={rectBorder}>
          <WrapperFlex style={{ height: '100%', width: 40 }} alignCenter justifyCenter>
            <SearchIcon />
          </WrapperFlex>
          <DebounceInput
            minLength={minLength}
            disabled={loading}
            placeholder={text}
            value={query}
            onChange={e => this.handleSearch(e.target.value)}
            debounceTimeout={debounce || 500}
          />
        </SearchBox>
      </Container>
    )
  }
}

export default SearchFilter

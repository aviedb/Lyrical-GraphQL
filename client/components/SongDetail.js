import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import fetchSong from '../queries/fetchSong'
import LyricCreate from './LyricCreate'

class SongDetail extends Component {
  render() {

    if(this.props.data.loading) {
      return <div></div>
    } else if(this.props.data.error) {
      return <div>404 Song not found!</div>
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{this.props.data.song.title}</h3>
        <LyricCreate />
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail)

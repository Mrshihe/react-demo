import React, { Component } from 'react'

export default class SearchList extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.users.map( item => {
            return (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img src={item.avatar_url} style={{width: '100px'}} alt={item.login} />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            ) 
          })
        }
      </div>
    )
  }
}

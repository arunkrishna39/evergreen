import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { TriangleIcon } from '../../icons'

export default class SortableIcon extends PureComponent {
  static propTypes = {
    /**
     * The sort order of the icon.
     */
    sortOrder: PropTypes.oneOf(['disabled', 'descending', 'ascending'])
  }

  static defaultProps = {
    sortOrder: 'disabled'
  }

  render() {
    const { sortOrder } = this.props
    return (
      <Pane
        is="span"
        display="inline-block"
        paddingLeft={6}
        {...(sortOrder === 'disabled' ? {} : { title: sortOrder })}
      >
        <TriangleIcon
          marginTop={-2}
          display="block"
          size={10}
          iconSize={10}
          color={sortOrder === 'ascending' ? 'default' : 'muted'}
        />
        <TriangleIcon
          marginTop={-2}
          display="block"
          size={10}
          iconSize={10}
          aim="bottom"
          color={sortOrder === 'descending' ? 'default' : 'muted'}
        />
      </Pane>
    )
  }
}

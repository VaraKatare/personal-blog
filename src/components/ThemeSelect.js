import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BlogThemeContext } from '../contexts/BlogThemeContext'
import { themes } from '../theme/globalStyle'

const SelectWrapper = styled.div`
  grid-area: t;
  margin: 0rem 0.5rem 0rem 0.25rem;
  padding: 0rem 0.5rem 0rem 0.25rem;
`

const Select = styled.select`
  margin: 0.5rem 0.5rem;
  padding: 0rem 0.5rem;
  font-family: ${({ theme }) => theme.fontBody};
  border: 1px solid ${props => props.border};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.foreground};
  border-radius: 2px;
`

export const SelectOpt = styled.option`
  font-family: ${({ theme }) => theme.fontBody};
`

const ThemeSelect = () => {
  return (
    <BlogThemeContext.Consumer>
      {({ handleThemeChange }) => (
        <SelectWrapper>
          <Select onChange={e => handleThemeChange(e)}>
            {Object.keys(themes).map((theme, index) => {
              return (
                <SelectOpt key={index} value={theme}>
                  Theme {index + 1}
                </SelectOpt>
              )
            })}
          </Select>
        </SelectWrapper>
      )}
    </BlogThemeContext.Consumer>
  )
}

ThemeSelect.propTypes = {
  handleThemeChange: PropTypes.func
}

export default ThemeSelect

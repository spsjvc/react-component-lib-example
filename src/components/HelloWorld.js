import React from 'react'
import styled from 'styled-components'

const HelloWorldWrapper = styled.div`
  color: orange;
  padding: 10px;
  font-size: 36px;
`

export function HelloWorld() {
  return <HelloWorldWrapper>Hello, World!</HelloWorldWrapper>
}

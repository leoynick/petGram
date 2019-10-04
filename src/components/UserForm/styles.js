import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #ccc;
  display: block;
  margin-bottom: 8px;
  padding: 8px 4px;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  display: block;
  height: 32px;
  text-align: center;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size:16px;
  font-weight: 500;
  padding: 8px 0;

`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`

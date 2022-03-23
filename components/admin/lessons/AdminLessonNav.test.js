import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import AdminLessonNav from './AdminLessonNav'
import { toUpper } from 'lodash'
import '@testing-library/jest-dom'

const fn = text => () => <p>{text}</p>

const tabs = [
  () => (
    <>
      <h1>Some text</h1>
      <p>Some paragraph that makes sense</p>
      <small>Small text for the vibes</small>
    </>
  ),
  fn('Modules with delete and add')
]

const navItems = [
  {
    value: 'introduction'
  },
  {
    value: 'modules'
  }
]

describe('AdminLessonNav component', () => {
  it('Should switch tabs on navItem click', async () => {
    expect.assertions(1)

    const { getByText } = render(
      <AdminLessonNav navItems={navItems} tabs={tabs} />
    )

    const modulesNavItem = getByText(toUpper('modules'))

    fireEvent.click(modulesNavItem)

    const modulesNavItemUpdated = getByText(toUpper('modules'))

    expect(modulesNavItemUpdated).toHaveClass('active')
  })
})

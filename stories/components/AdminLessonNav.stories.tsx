import * as React from 'react'
import AdminLessonNav from '../../components/admin/lessons/AdminLessonNav'

export default {
  component: AdminLessonNav,
  title: 'Components/AdminLessonNav'
}

const fn = (text: string) => () => <p>{text}</p>

export const Basic: React.FC = () => {
  return (
    <AdminLessonNav
      navItems={[
        {
          value: 'introduction'
        },
        {
          value: 'modules'
        }
      ]}
      tabs={[
        () => (
          <>
            <h1>Some text</h1>
            <p>Some paragraph that makes sense</p>
            <small>Small text for the vibes</small>
          </>
        ),
        fn('Modules with delete and add')
      ]}
    />
  )
}

export const WithManyItems: React.FC = () => {
  return (
    <AdminLessonNav
      navItems={[
        {
          value: 'Betrouka'
        },
        {
          value: 'Agwamvi'
        },
        {
          value: 'Tekrupbez'
        },
        {
          value: 'Hopebam'
        },
        {
          value: 'Wezwowpoj'
        },
        {
          value: 'Zokdiwju'
        },
        {
          value: 'Hesculnu'
        },
        {
          value: 'Odvipjih'
        },
        {
          value: 'Hebrakbi'
        },
        {
          value: 'Utfaana'
        },
        {
          value: 'Ihieconus'
        },
        {
          value: 'Paheze'
        },
        {
          value: 'Upanwe'
        },
        {
          value: 'Dewtaiha'
        }
      ]}
      tabs={[
        () => (
          <>
            <h1>Some text</h1>
            <p>Some paragraph that makes sense</p>
            <small>Small text for the vibes</small>
          </>
        ),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add'),
        fn('Modules with delete and add')
      ]}
    />
  )
}

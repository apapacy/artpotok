import React, { Component } from 'react'
import './ProgramPracticeList.css'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import { Link } from 'react-router-dom'
import { ADD_PRACTICE_URL } from 'constants/URL'
import practicesContextConnection from 'context/Practices/practicesContextConnection'
import _ from 'lodash'
import ProgramPracticeListItem from 'components/ProgramPracticeList/ProgramPracticeListItem'
import ActionButton from 'components/ActionButton'

@practicesContextConnection
export default class ProgramPracticeList extends Component {
  render () {
    const {
      props: {
        practices_list
      }
    } = this
    return (
      <div className='ProgramPracticeList'>
        <Container>
          <PageTitle>
            Список практик
          </PageTitle>
          <nav>
            <ul className='ProgramMasterClassList-ul'>
              {_.map(practices_list, (practice, key) => {
                return (
                  <li key={key}>
                    <ProgramPracticeListItem {...practice} />
                  </li>
                )
              })}
            </ul>
          </nav>
          <ActionButton>
            <Link to={ADD_PRACTICE_URL} title={'Добавить новую практику'}>+</Link>
          </ActionButton>
        </Container>
      </div>
    )
  }
}

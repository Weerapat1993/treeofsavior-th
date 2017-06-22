import { getSkillFilter } from '../skillSelector'

const initialState = {
  task: {
    loading: true,
    data: [
      {
        id: 1,
        title: 'Skill 101',
        completed: true
      },
      {
        id: 2,
        title: 'Skill 102',
        completed: false
      }
    ]
  }
}

// Filter Data
const search = ['','active','completed']

describe('Skill Selector', () => {
  for (let i = 0; i < search.length; i++) {
    it('should Skill Selector Filter : ' + search[i], () => {
      const props = {
        location: {
          query: {
            filter: search[i]
          }
        }
      }
      const recieved = getSkillFilter(initialState, props)
      const expected = getFilterData(initialState, props)

      expect(recieved).toEqual(expected)
    })
  }
})

// Function Filter Data
function getFilterData(state, props) {
  const skill = state.skill.data
  const { filter } = props.location.query
  switch (filter) {
    case 'active':
      return skill.filter(item => !item.completed);

    case 'completed':
      return skill.filter(item => item.completed);

    default:
      return skill;
  }
}

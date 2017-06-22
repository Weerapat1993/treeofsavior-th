import { getAttributeFilter } from '../attributeSelector'

const initialState = {
  task: {
    loading: true,
    data: [
      {
        id: 1,
        title: 'Attribute 101',
        completed: true
      },
      {
        id: 2,
        title: 'Attribute 102',
        completed: false
      }
    ]
  }
}

// Filter Data
const search = ['','active','completed']

describe('Attribute Selector', () => {
  for (let i = 0; i < search.length; i++) {
    it('should Attribute Selector Filter : ' + search[i], () => {
      const props = {
        location: {
          query: {
            filter: search[i]
          }
        }
      }
      const recieved = getAttributeFilter(initialState, props)
      const expected = getFilterData(initialState, props)

      expect(recieved).toEqual(expected)
    })
  }
})

// Function Filter Data
function getFilterData(state, props) {
  const attribute = state.attribute.data
  const { filter } = props.location.query
  switch (filter) {
    case 'active':
      return attribute.filter(item => !item.completed);

    case 'completed':
      return attribute.filter(item => item.completed);

    default:
      return attribute;
  }
}

export function get${name_pascal}Filter(state, props) {
  const ${name} = state.${name}.data
  const { filter } = props.location.query

  switch (filter) {
    case 'active':
      return ${name}.filter(item => !item.completed);

    case 'completed':
      return ${name}.filter(item => item.completed);

    default:
      return ${name};
  }
}

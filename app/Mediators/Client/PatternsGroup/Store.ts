import Group from 'App/Models/PatternGroup'

const Store = async ({
  sampling,
  average_age,
  male,
  female,
  symptoms,
  country,
  state,
  rtpcr,
  quick_test,
  x_ray,
  tomography,
  reference }: Group) => {
  const group = await Group.create({
    sampling,
    average_age,
    male,
    female,
    symptoms,
    country,
    state,
    rtpcr,
    quick_test,
    x_ray,
    tomography,
    reference,
  })
  return { status: 201, data: group }
}

export default Store

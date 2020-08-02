import Pattern from 'App/Models/Pattern'

const Store = async ({
  sex,
  age,
  symptoms,
  country,
  state,
  rtpcr,
  quick_test,
  x_ray,
  tomography,
  reference }: Pattern) => {
  const pattern = await Pattern.create({
    sex,
    age,
    symptoms,
    country,
    state,
    rtpcr,
    quick_test,
    x_ray,
    tomography,
    reference,
  })
  return { status: 201, data: pattern }
}

export default Store

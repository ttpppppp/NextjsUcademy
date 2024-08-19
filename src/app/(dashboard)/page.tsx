import CourseGrid from '@/component/common/CourseGrid'
import CourseItem from '@/component/course/CourseItem'
import Heading from '@/component/typography/Heading'
import createUser from '@/lib/actions/user.action'
import React from 'react'

const page =  async () => {
  const newUser = await createUser({clerkId : "123" ,  username :"Thu Ha" , email : "despacitovv@gmail.com"});
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem/>
        <CourseItem/>
        <CourseItem/>
      </CourseGrid>
    </div>
  )
}

export default page
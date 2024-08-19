import CourseGrid from '@/component/common/CourseGrid'
import CourseItem from '@/component/course/CourseItem'
import Heading from '@/component/typography/Heading'
import createUser from '@/lib/actions/user.action'
import React from 'react'

const page =  () => {
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
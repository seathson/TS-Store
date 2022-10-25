import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'

interface CategoryProps {
  categories: never[],
  sortProducts: Function
}

export function Category({ categories, sortProducts }: CategoryProps) {
  const inputClassName = 'mx-2 my-1 p-1 border rounded transition cursor-pointer'
  const inputClasses = ['bg-yellow-300', inputClassName]
  return (
    <div className="mx-5 w-[300px] 3xl:w-auto">
      <Formik
        initialValues={{
          toggle: false,
          checked: [],
        }}
        onSubmit={async (values) => {
          sortProducts(values.checked)
        }}
      >
        {({ values }) => (
          <Form>
            <div id="checkbox-group" className='m-2 text-xl font-bold'>Categories</div>
            <div role="group" aria-labelledby="checkbox-group" className='flex flex-wrap m-2'>
              {categories.map((category, index) => (
                <label key={index} className={values.checked.includes(category) ? inputClasses.join(' ') : inputClassName}>
                  <Field type="checkbox" name="checked" hidden value={category} />
                  <span>{category}</span>
                </label>
              ))}
            </div>

            <button type="submit" className='bg-green-300 px-2 py-1 m-2 rounded outline-none'>Apply</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

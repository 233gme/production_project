import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'

const AppRouter = () => {
  return (
      <Suspense fallback={<PageLoader />}>
          <Routes>
              {Object.values(routeConfig).map(({ element, path }, index) => (
                  <Route
                    key={`${path}_${index}`}
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                        )}
                    />
              ))
                }
          </Routes>
      </Suspense>
  )
}

export default AppRouter

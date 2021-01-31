/* globals fetch */
import React, { useEffect } from 'react'
import { Section } from './styles'

const Injector = ({ id, name, host, ...rest }) => {
  useEffect(() => {
    const scriptId = `widget-script-${name}`

    if (document.getElementById(scriptId)) {
      renderWidget()
      return
    }

    fetch(`${host}/manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script')
        script.id = scriptId
        script.crossOrigin = ''
        script.src = `${host}${manifest['widget.js']}`
        script.onload = renderWidget
        document.head.appendChild(script)
      })

    return () => {
      window[`unmount${name}`](`${name}-container-${id}`)
    }
  }, [])

  const renderWidget = () => {
    window[`render${name}`](`${name}-container-${id}`, rest)
  }

  return (
    <Section id={`${name}-container-${id}`} />
  )
}

export default Injector

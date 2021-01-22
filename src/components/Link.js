import React from 'react'

const Link = () => {
    const onClick = (e) => {
        e.preventDefault()
        window.history.pushState({}, '', href);
        const navEvent = newPopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }


return (
    <a onClick={onClick} className={className} href={href}>
        {children}
    </a>
)}

export default Link
import { useState } from 'react'

function useToggle(initialVal = false) {
    const [state, setstate] = useState(initialVal);
    const toggle = () => {
        setstate(!state);
    }
    return [state, toggle]
}
export default useToggle
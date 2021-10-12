import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const WorkImage = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const workImageRef = useRef()
    useImperativeHandle(ref, () => ({
        getIsInViewport: () => {
            let boundingRect = workImageRef.current.getBoundingClientRect()
            return boundingRect.top < window.innerHeight
        },
        setVisible: () => {
            setVisible(true)
        }
    }))

    return (
        <div ref={workImageRef} className={`workImage imageRandom-${props.index} ${visible ? 'inViewport':  ''}`}
            onClick={props.onClick}
        >
            <img src={process.env.PUBLIC_URL + '/images/' + props.folder + '/' + props.name} alt={'image-' + props.index} />

        </div>
    )
})

const Work = forwardRef((props, ref) => {
    const blockWorkRef = useRef()
    const [titleVisible, setTitleVisible] = useState(false)
    useImperativeHandle(ref, () => ({
        getTitleVisibility: () => {
            let boundingRect = blockWorkRef.current.getBoundingClientRect()
            let newVisibility = boundingRect.top < window.innerHeight / 2 && boundingRect.bottom > 0 && boundingRect.bottom >= window.innerHeight / 2
            if (titleVisible !== newVisibility) {
                setTitleVisible(newVisibility)
                return newVisibility
            }
        },
        getTitle: () => {
            return props.title
        }
    }))

    return (
    <React.Fragment>
        <div ref={blockWorkRef} className={`blockWork`}>
            {
                props.images.map((elem, index) => {
                    return (
                        <WorkImage workIndex={props.index} ref={props.workImagesRefs[index]} key={index} index={index} folder={props.images_folder} name={elem} onClick={() => { window.location.href = process.env.PUBLIC_URL + '/works/' + props.title.toLowerCase() }} />
                    )
                })
            }
        </div>
    </React.Fragment>
    )
})

export default Work
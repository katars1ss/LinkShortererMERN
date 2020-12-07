import React from 'react'

export const Loader = () => (
    <div className="page_preloader">
        <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-light-blue darken-1">
            <div className="circle-clipper left">
            <div className="circle"/>
            </div><div className="gap-patch">
            <div className="circle"/>
            </div><div className="circle-clipper right">
            <div className="circle"/></div>
        </div>

        <div className="spinner-layer spinner-yellow darken-1">
            <div className="circle-clipper left">
            <div className="circle"/>
            </div><div className="gap-patch">
            <div className="circle"/>
            </div><div className="circle-clipper right">
            <div className="circle"/></div>
        </div>
        </div>
    </div>
)
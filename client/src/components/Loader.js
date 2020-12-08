import React from 'react'

export const Loader = () => (
    <div className="page_preloader">
        <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue">
            <div className="circle-clipper left">
            <div className="circle"/>
            </div><div className="gap-patch">
            <div className="circle"/>
            </div><div className="circle-clipper right">
            <div className="circle"/></div>
        </div>

        <div className="spinner-layer spinner-yellow">
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
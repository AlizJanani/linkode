import React from 'react';
import { connect } from 'react-redux';

import './host-page.css';

import Choose from './choose';
import { ContentPage } from '../ui-elements';

const ReceptPage = props => {
    let filesList = {};
    props.files.forEach(file => {
        filesList[file.preview] = file.name;
    });

    let peerConnection = new RTCPeerConnection();
    let dataChannel = peerConnection.createDataChannel("host");

    dataChannel.onopen = e => {
        dataChannel.send({
            type: 'fileList',
            data: filesList
        })
    };

    peerConnection.onconnectionstatechange = e => console.log(e);

    return (
        <ContentPage className="host-page">
            <h2 className="host-title">
                لینکد شما تا وقتی که
                <span> این صفحه </span>
                باز باشد کار خواهد کرد
            </h2>
            <div className="host-panel">
                <div className="host-panel-item">
                    <h3>افراد متصل</h3>
                    <span className="host-panel-number">
                        5
                    <span>
                            نفر
                    </span>
                    </span>
                </div>
                <div className="host-panel-seperator" />
                <div className="host-panel-item">
                    <h3>حجم مصرفی</h3>
                    <span className="host-panel-number">
                        <span>
                            MB
                    </span>
                        250
                </span>
                </div>
            </div>
            <Choose />
        </ContentPage>
    );
}

const mapStateToProps = state => ({
    files: state.files
});

export default connect(mapStateToProps)(ReceptPage);
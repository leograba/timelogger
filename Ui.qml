import QtQuick 2.9

import QtQuick.Controls 2.4
import QtQuick.Controls.Material 2.4

import leo.readjson 1.0

Pane {
    property real label: 0.2
    property int row_height: 40
    Material.theme: Material.Dark

    ReadJson{
        id:cfg
    }

    Column {
        id: row
        spacing: 2
        width: 0.8 * parent.width
        height: parent.height

        Rectangle {
            id: rectangle
            color: "transparent"
            height: row_height
            width: parent.width

            Label {
                id: aa_label
                width: label * parent.width
                height: parent.height
                text: qsTr("Analytic Account")
                wrapMode: Text.WordWrap
                bottomPadding: 10
                verticalAlignment: Text.AlignVCenter
                font.pixelSize: 12
            }

            TextField {
                id: analytic_account
                width: (parent.width - aa_label.width)
                height: parent.height
                anchors.left: aa_label.right
                placeholderText: qsTr("e.g. SA000")
                font.pixelSize: 12
            }
        }

        Rectangle{
            color: "transparent"
            height: row_height
            width: parent.width

            Label {
                id: desc_label
                width: label * parent.width
                height: parent.height
                text: qsTr("Description")
                bottomPadding: 10
                verticalAlignment: Text.AlignVCenter
                font.pixelSize: 12
            }

            TextField {
                id: description
                width: (parent.width - desc_label.width)
                height: parent.height
                anchors.left: desc_label.right
                placeholderText: qsTr("e.g. Sales meeting with BR office")
                font.pixelSize: 12
            }
        }

        Rectangle{
            color: "transparent"
            height: row_height
            width: parent.width

            Label {
                id: qty_label
                width: label * parent.width
                height: parent.height
                text: qsTr("Hours")
                bottomPadding: 10
                verticalAlignment: Text.AlignVCenter
                font.pixelSize: 12
            }

            TextField {
                id: quantity
                width: (parent.width - qty_label.width)
                height: parent.height
                anchors.left: qty_label.right
                placeholderText: qsTr("e.g. 4.5 means 4 hours and 30 minutes")
                font.pixelSize: 12
            }
        }
    }

    Button{
        id: submit
        width: parent.width - row.width - anchors.leftMargin
        height: parent.height
        text: qsTr("Log!");
        flat: true
        anchors.leftMargin: 10
        anchors.left: row.right

        onClicked: {
            in_progress.running = true

            var url = JSON.parse(cfg.configString)["msflow_url"];
            var xhr = new XMLHttpRequest();
            var data_json = JSON.stringify({
                description: description.text,
                analytic_account: analytic_account.text,
                quantity: quantity.text
            });

            // Action
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    sbmt_timer.start()
                }
            }

            // Send request
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.send(data_json);
        }

        Timer {
            id: sbmt_timer
            onTriggered: in_progress.running = false
        }

        BusyIndicator {
            id: in_progress
            anchors.fill: parent
            running: false
        }
    }

}

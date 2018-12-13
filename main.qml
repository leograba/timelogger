import QtQuick 2.9

import QtQuick.Controls 2.4
import QtQuick.Controls.Material 2.4

ApplicationWindow {
    visible: true
    width: 450
    height: 150

    minimumWidth: 430
    minimumHeight: 150

    maximumWidth: 800
    maximumHeight: 150

    title: qsTr("Working Hours Logger")

    Ui{
        width: parent.width
        height: parent.height
    }
}

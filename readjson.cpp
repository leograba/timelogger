#include "readjson.h"

#include <QDebug>
#include <QFile>
#include <QString>
#include <QTextStream>

ReadJson::ReadJson(QObject *parent):
    QObject(parent)
{
    // Only parse config file on init
    const QString conf_file = ":config.json";
    QFile cfg(conf_file);
    QTextStream fstr(&cfg);

    if (cfg.open(QIODevice::ReadOnly))
    {
        m_configString = fstr.readAll();
        qDebug() << "JSON config string loaded: " << m_configString;
    } else{
        qDebug() << "Unable to load JSON config string";
        m_configString = nullptr;
    }
}

QString ReadJson::configString()
{
    return m_configString;
}

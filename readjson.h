/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <leogveiga@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Leonardo G. Veiga
 * ----------------------------------------------------------------------------
 */

#ifndef READJSON_H
#define READJSON_H

#include <QObject>

class ReadJson : public QObject
{
    Q_OBJECT
    Q_PROPERTY(QString configString READ configString)

public:
    explicit ReadJson(QObject *parent = nullptr);
    QString configString();

private:
    QString m_configString;
};

#endif // READJSON_H

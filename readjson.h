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

FROM iojs:2.3.4

MAINTAINER robert.djurasaj@gmail.com

COPY app /opt/app
WORKDIR /opt/app
RUN ["npm","install"]

CMD ["npm","start"]

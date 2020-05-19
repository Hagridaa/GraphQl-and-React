#rakennusohjeet frontille ja bäkkärille

#haetaan pohja image, eli rakennusohjeet joiden päälle rakennetaan oma image
FROM node:lts

#asetetaan portti, mihin käynnistetään sovellus
ENV PORT=8000

#The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile.
WORKDIR /code

#kopio projektin kaikki tiedostot konttiin kansiion code, jonka WORKDIR loi äsken
COPY . /code

#The RUN instruction will execute any commands in a new layer on top of the current image and commit the results. 
#The resulting committed image will be used for the next step in the Dockerfile. Eli tämä käy hakemessa ja lataa kaikki riippuvaisuuden kontiin
#install voi muuttaa packace-locj jsonia mutta npm ci ei muuta mitään.
RUN npm ci 

#rakentaa frontin
RUN npm run client:build

EXPOSE 8000

#käynnistys komento, jolla hommaa starttaa
CMD ["npm", "run","server"]

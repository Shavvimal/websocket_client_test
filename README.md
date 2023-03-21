# Quadra Website Repo

Deployed [here](https://nduk-quadra.netlify.app/)

## Commands

- `npm install`
- `npm run dev`
- `npm run build`

## Background Black / Dark Gray

- #06101A

## Design Inspiration:

- [Arkham Intelligence](https://www.arkhamintelligence.com/)
- [Apple AirPods](https://www.apple.com/uk/airpods-pro/)
- notched box idea from [here](https://stackoverflow.com/questions/71315127/how-can-i-make-angled-border-radius-using-tailwind-or-mui-in-react-javascript)

## Content Inspiration:

- [Deloitte Blockchain](https://www2.deloitte.com/uk/en/pages/innovation/solutions/deloitte-blockchain-practice.html)
- [EY: Blockchain consulting services](https://www.ey.com/en_uk/consulting/blockchain-consulting-services)
- [Accenture: Blockchain](https://www.accenture.com/gb-en/services/blockchain-index)
- [Crypto Consultant](https://crypto-consultant.io/)
- [Framer](https://www.framer.com/)

# ToDo

- [x] Translation Bpx
- [x] Use Translate
- [x] Lambdas
- [x] Translation JSON
- [x] Mobile Version Website
- [x] msake header black on mobile at the top
- [x] Remove oter characters
- [ ] Create and Upload Mockup Assets
- [ ] New Logo

# Kafka Architecture

- [Stream Processing and Real-Time Databases to Analyze Streaming Data in Kafka](https://rockset.com/blog/ksql-stream-processing-real-time-databases-analyze-streaming-data-in-kafka/)
- [Real-Time Gaming Infrastructure for Millions of Users with Apache Kafka, ksqlDB, and WebSockets](https://www.confluent.io/en-gb/blog/real-time-gaming-infrastructure-kafka-ksqldb-websockets/)
- [Kafka + WebSockets + Angular: event-driven microservices all the way to the frontend](https://dev.to/victorgil/kafka-websockets-angular-event-driven-microservices-all-the-way-to-the-frontend-12aa)
- [Kafka Streams](https://kafka.apache.org/documentation/streams/)
- [8 top stream processing platforms](https://ably.com/blog/a-look-at-8-top-stream-processing-platforms)
- [Kafka Websockets](https://ably.com/topic/websockets-kafka)

# Kafka Client Comparison:

- [Apache Kafka Client Benchmarks](https://docs.rackspace.com/blog/Apache-Kafka-Client-Benchmarks/#:~:text=Java%20benchmarks&text=Java%20performed%20better%20than%20any,to%2050%2C000%20messages%20per%20second.)

# Kafka Optomisations

- [99th Percentile Latency at Scale with Apache Kafka](https://www.confluent.io/en-gb/blog/configure-kafka-to-minimize-latency/)
- [Whitepaper: Optimizing Your Apache Kafka Deployment](https://www.confluent.io/blog/optimizing-apache-kafka-deployment/)
- [Stack Overflow: Reduce latency between kafka's producer and consumer](https://stackoverflow.com/questions/64767154/how-to-reduce-latency-between-kafkas-producer-and-consumer)

# Issues with Distribution

- [How to stream Kafka messages to Internet-facing clients over WebSockets](https://ably.com/topic/websockets-kafka)

# Stacks

- [Angular + Spring Boot + Kafka](https://medium.com/swlh/angular-spring-boot-kafka-how-to-stream-realtime-data-the-reactive-way-510a0f1e5881)
- [Kafka + WebSockets + Angular](http://www.devaction.net/2019/11/kafka-websockets-angular.html)

# Qns:

Issue is that it’s not scalable to have a 1:1 mapping between consuemrs and Kafka topics. we need an Internet-facing realtime messaging service between your Kafka layer and your end-users. Kafka was designed chiefly for machine to machine communication inside a network, where it streams data to a low number of subscribers. As a consequence, it’s not optimized to fan-out messages to a high number of clients over the Internet. However, with an Internet-facing realtime messaging service in the middle, the situation is entirely different. You can use the messaging service layer to offload the fanning out of messages to clients. If this layer has the capacity to deliver the fan-out messages, then it can deliver them with very low latency, and without you having to add capacity to your Kafka cluster.

- Which architecture are we using?
- Which language?
- Which service are we using for stream processing?
- Which AWS services in particular? Using Managed service is easier (no need to manage zookeeper, consensus, size of partitions)
- Size of replication - 3?
- Best method of Semantic Partitioning
- Scaling out Consumers - Websockets Server? Use Consumer Grouping?

# Real Time Database Instead?

- Options include: OpenTSDB, Apache Druid, InfluxDB

# BitMex Stack

- Java Memory Model and concurrency
- KDB/q language
- containerisation using Docker/Kubernetes
- REST/WS
- FIX

# An introduction to kdb+

- q programming language.
-

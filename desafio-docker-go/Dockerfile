FROM golang:1.21 AS builder

WORKDIR /usr/src/app

COPY . .
RUN go build ola-mundo.go

FROM scratch

COPY --from=builder /usr/src/app/ola-mundo .

CMD ["./ola-mundo"]

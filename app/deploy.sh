#!/bin/sh

preact build
aws s3 sync build/ s3://my-little-pony


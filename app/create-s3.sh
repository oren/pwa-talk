#!/bin/sh

aws s3 mb s3://my-little-pony
aws s3api put-bucket-policy --bucket my-little-pony --policy file://policy.json
aws s3api put-bucket-website --bucket my-little-pony --website-configuration file://website.json

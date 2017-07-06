## Setup AWS CLI
```
pip install --upgrade --user awscli
aws configure
AWS Access Key ID [None]: IAM access key id
AWS Secret Access Key [None]: IAM secret access key
Default region name [None]: us-west-2
Default output format [None]:
```

## Create S3 bucket
```
aws s3 mb s3://my-little-pony
aws s3api put-bucket-policy --bucket my-little-pony --policy file://policy.json
aws s3api put-bucket-website --bucket my-little-pony --website-configuration file://website.json
```

## Deploy to S3
```
$ preact build && aws s3 sync build/ s3://my-little-pony
```

## Deploy to CloudFront
https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af

## Misc
remove bucket
```
aws s3 rb s3://my-little-pony --force
```

list all buckets
```
aws s3 ls
```

show content of bucket
```
aws s3 ls s3://my-little-pony
```

Bucket URL: http://my-little-pony.s3-website-us-west-2.amazonaws.com

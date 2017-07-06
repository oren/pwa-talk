## Setup AWS CLI
```
pip install --upgrade --user awscli
aws configure
AWS Access Key ID [None]: IAM access key id
AWS Secret Access Key [None]: IAM secret access key
Default region name [None]: us-west-2
Default output format [None]:
```

## Deploy to S3
```
// create a bucket
aws s3 mb s3://my-little-pony

// list buckets
$ aws s3 ls

// build and deploy the app
$ preact build && aws s3 sync build/ s3://my-little-pony
```

## Deploy to CloudFront
https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af

## Misc
remove bucket
```
aws s3 rb s3://bucket-name --force
```

list all buckets
```
aws s3 ls
```

show content of bucket
```
aws s3 ls s3://bucket-name
```

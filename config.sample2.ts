/*
 *  Copyright 2025 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
 *  Licensed under the Amazon Software License  http://aws.amazon.com/asl/
 */
import { AttributeType, Billing } from "aws-cdk-lib/aws-dynamodb";
import * as path from "path";
import { Config } from "./types/type";

export const devConfig: Config = {
  userName: "user01",
  userEmail: "user01@netappdemo.be",
  allowedIps: ["202.3.127.4/32"],
  networkConfig: {
    existingVpc: true,
    vpcId: "vpc-08869490ebfad92e8",
    cidr: "10.0.0.0/16",
    subnetCidrMask: 24,
    publicSubnet: true,
    natSubnet: true,
    isolatedSubnet: true,
    maxAzs: 2,
  },
  fsxConfig: {
    subnetIds: [],
    storageCapacity: 1024,
    deploymentType: "SINGLE_AZ_1",
    throughputCapacity: 128,
    fsxAdminPassword:"Netapp1!",
    adConfig:{
      existingAd: true,
      svmNetBiosName: "svm",
      adDnsIps: ["10.0.3.103","10.0.2.207"],
      adDomainName: "netappdemo.be",
      adAdminPassword: "Netapp1!",
      serviceAccountUserName: "Admin",
      serviceAccountPassword: "",
      adOu: "OU=Computers,OU=netappdemo,DC=netappdemo,DC=be",
      fileSystemAdministratorsGroup: "AWS Delegated Administrators",
    }
  },
  databaseConfig: {
      partitionKey: {
        name: "SessionId",
        type: AttributeType.STRING,
      },
      billing: Billing.onDemand(),
    userAccessTable: "user-access-table",
  },
  chatAppConfig: {
    imagePath: path.join(__dirname, "./", "docker"),
    tag: "latest",
    lambdaVpcId:"vpc-0c76d3db311ac8b61",
    lambdaVpcSubnets:[{subnetId: "subnet-0b0ac9e942020b672",availabilityZone:"use1-az5"},{subnetId: "subnet-085b22a05300efd63",availabilityZone:"use1-az3"}], 
  },
  vectorConfig: {
    vector: "aurora",
    collectionName: "fsxnragvector",
  },
};

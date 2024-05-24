import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as cdk from 'aws-cdk-lib';

export class MyStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Crie uma VPC (Virtual Private Cloud)
        const vpc = new ec2.Vpc(this, 'my-cdk-vpc', {
            cidr: '10.0.0.0/16',
            maxAzs: 3,
            subnetConfiguration: [
                {
                    name: 'public-subnet-1',
                    subnetType: ec2.SubnetType.PUBLIC,
                    cidrMask: 24,
                },
            ],
        });

        // Crie um grupo de segurança para o servidor web
        const webServerSG = new ec2.SecurityGroup(this, 'web-server-sg', {
            vpc,
            allowAllOutbound: true,
            description: 'Security group for a web server',
        });

        // Adicione regras de entrada ao grupo de segurança
        webServerSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'Allow SSH access from anywhere');
        webServerSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow HTTP traffic from anywhere');
        webServerSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow HTTPS traffic from anywhere');
        webServerSG.addIngressRule(ec2.Peer.ipv4('123.123.123.123/16'), ec2.Port.allIcmp(), 'Allow ICMP traffic from a specific IP range');
    }
}

const app = new cdk.App();
new MyStack(app, 'MyStack');

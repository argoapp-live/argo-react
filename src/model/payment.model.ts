export interface IPaymentModel {
  projectName: string;
  deploymentId: string;
  buildTime: string;
  providerFee: number;
  finalArgoFee: number;
  createdAt: string;
}

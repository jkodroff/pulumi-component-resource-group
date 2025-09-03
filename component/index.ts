import * as pulumi from "@pulumi/pulumi";
import * as azureNative from "@pulumi/azure-native";

export interface MyResourceGroupArgs {
  // TODO: Add input properties in the following form:
  // inputProperty: pulumi.Input<T>
}

export class MyResourceGroup extends pulumi.ComponentResource {
  public readonly myResourceGroup: azureNative.resources.ResourceGroup;

  constructor(name: string, args: MyResourceGroupArgs, opts: pulumi.CustomResourceOptions) {
    super("pulumi-components:index:MyResourceGroup", name, args, opts);

    this.myResourceGroup = new azureNative.resources.ResourceGroup(`${name}-resource-group`, {

    });

    this.registerOutputs({
      myResourceGroup: this.myResourceGroup,
    });
  }
}
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import { DefinitionProvider, TextDocument, Position, CancellationToken, Definition } from 'vscode';

import { ITypescriptServiceClient } from '../typescriptService';
import DefinitionProviderBase from './definitionProviderBase';

export default class TypeScriptDefinitionProvider extends DefinitionProviderBase implements DefinitionProvider {

	constructor(client: ITypescriptServiceClient) {
		super(client);
	}

	public provideDefinition(document: TextDocument, position: Position, token: CancellationToken | boolean): Promise<Definition | null> {
		return this.getSymbolLocations('definition', document, position, token);
	}
}
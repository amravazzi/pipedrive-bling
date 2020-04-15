import Quote from '../models/Model';
import Deal from '../models/Deal';
import Pipedrive from '../services/Pipedrive'
import Bling from '../services/Bling'

class DealController {
	constructor() { }

	index(req, res, next) {

    Deal.find({ status: 'active' })
     .then(result => res.status(200).json(result))
     .catch(err => res.status(500).json(err));
	}

  consolidate(req, res) {
    const Pipe = new Pipedrive();

    Pipe.run()
      .then(async results => {
        results.map(result => {
          let newDeal = new Deal(result)
          let final = newDeal
            .save()
            .then(result => {
              // TODO: transform the result into an valid XML
              // to be submitted to Bling API. The following
              // XML is a mockup extracted from ther docs.
              const bling = new Bling('<?xml version="1.0" encoding="UTF-8"?> <pedido> <cliente> <nome>Organisys Software</nome> <tipoPessoa>J</tipoPessoa> <endereco>Rua Visconde de São Gabriel</endereco> <cpf_cnpj>00000000000000</cpf_cnpj> <ie_rg>3067663000</ie_rg> <numero>392</numero> <complemento>Sala 54</complemento> <bairro>Cidade Alta</bairro> <cep>95.700-000</cep> <cidade>Bento Gonçalves</cidade> <uf>RS</uf> <fone>5481153376</fone> <email>teste@teste.com.br</email> </cliente> <transporte> <transportadora>Transportadora XYZ</transportadora> <tipo_frete>R</tipo_frete> <servico_correios>SEDEX - CONTRATO</servico_correios> <dados_etiqueta> <nome>Endereço de entrega</nome> <endereco>Rua Visconde de São Gabriel</endereco> <numero>392</numero> <complemento>Sala 59</complemento> <municipio>Bento Gonçalves</municipio> <uf>RS</uf> <cep>95.700-000</cep> <bairro>Cidade Alta</bairro> </dados_etiqueta> <volumes> <volume> <servico>SEDEX - CONTRATO</servico> <codigoRastreamento></codigoRastreamento> </volume> <volume> <servico>PAC - CONTRATO</servico> <codigoRastreamento></codigoRastreamento> </volume> </volumes> </transporte> <itens> <item> <codigo>001</codigo> <descricao>Caneta 001</descricao> <un>Pç</un> <qtde>10</qtde> <vlr_unit>1.68</vlr_unit> </item> <item> <codigo>002</codigo> <descricao>Caderno 002</descricao> <un>Un</un> <qtde>3</qtde> <vlr_unit>3.75</vlr_unit> </item> <item> <codigo>003</codigo> <descricao>Teclado 003</descricao> <un>Cx</un> <qtde>7</qtde> <vlr_unit>18.65</vlr_unit> </item> </itens> <parcelas> <parcela> <data>01/09/2009</data> <vlr>100</vlr> <obs>Teste obs 1</obs> </parcela> <parcela> <data>06/09/2009</data> <vlr>50</vlr> <obs></obs> </parcela> <parcela> <data>11/09/2009</data> <vlr>50</vlr> <obs>Teste obs 3</obs> </parcela> </parcelas> <vlr_frete>15</vlr_frete> <vlr_desconto>10</vlr_desconto> <obs>Testando o campo observações do pedido</obs> <obs_internas>Testando o campo observações internas do pedido</obs_internas> </pedido>');
              bling.run()
                .then(re => res.status(200).json(re))
                .catch(err => res.status(err.status).json(err))
            })
            .catch(error => {
              console.log(error);
              const d = new DealController();
              let r = d.index(req, res);
              // res.status(500).json(error)
            });
        });
      })
      .catch(error => console.log(error));
  }
}

export default DealController;

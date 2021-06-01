(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{656:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-005-consensus-params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-005-consensus-params"}},[e._v("#")]),e._v(" ADR 005: Consensus Params")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Consensus critical parameters controlling blockchain capacity have until now been hard coded, loaded from a local config, or neglected.\nSince they may be need to be different in different networks, and potentially to evolve over time within\nnetworks, we seek to initialize them in a genesis file, and expose them through the ABCI.")]),e._v(" "),a("p",[e._v("While we have some specific parameters now, like maximum block and transaction size, we expect to have more in the future,\nsuch as a period over which evidence is valid, or the frequency of checkpoints.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("h3",{attrs:{id:"consensusparams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consensusparams"}},[e._v("#")]),e._v(" ConsensusParams")]),e._v(" "),a("p",[e._v("No consensus critical parameters should ever be found in the "),a("code",[e._v("config.toml")]),e._v(".")]),e._v(" "),a("p",[e._v("A new "),a("code",[e._v("ConsensusParams")]),e._v(" is optionally included in the "),a("code",[e._v("genesis.json")]),e._v(" file,\nand loaded into the "),a("code",[e._v("State")]),e._v(". Any items not included are set to their default value.\nA value of 0 is undefined (see ABCI, below). A value of -1 is used to indicate the parameter does not apply.\nThe parameters are used to determine the validity of a block (and tx) via the union of all relevant parameters.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBDb25zZW5zdXNQYXJhbXMgc3RydWN0IHsKICAgIEJsb2NrU2l6ZQogICAgVHhTaXplCiAgICBCbG9ja0dvc3NpcAp9Cgp0eXBlIEJsb2NrU2l6ZSBzdHJ1Y3QgewogICAgTWF4Qnl0ZXMgaW50CiAgICBNYXhUeHMgaW50CiAgICBNYXhHYXMgaW50Cn0KCnR5cGUgVHhTaXplIHN0cnVjdCB7CiAgICBNYXhCeXRlcyBpbnQKICAgIE1heEdhcyBpbnQKfQoKdHlwZSBCbG9ja0dvc3NpcCBzdHJ1Y3QgewogICAgQmxvY2tQYXJ0U2l6ZUJ5dGVzIGludAp9Cg=="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ConsensusParams")]),e._v(" can evolve over time by adding new structs that cover different aspects of the consensus rules.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("BlockPartSizeBytes")]),e._v(" and the "),a("code",[e._v("BlockSize.MaxBytes")]),e._v(" are enforced to be greater than 0.\nThe former because we need a part size, the latter so that we always have at least some sanity check over the size of blocks.")]),e._v(" "),a("h3",{attrs:{id:"abci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[e._v("#")]),e._v(" ABCI")]),e._v(" "),a("h4",{attrs:{id:"initchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initchain"}},[e._v("#")]),e._v(" InitChain")]),e._v(" "),a("p",[e._v("InitChain currently takes the initial validator set. It should be extended to also take parts of the ConsensusParams.\nThere is some case to be made for it to take the entire Genesis, except there may be things in the genesis,\nlike the BlockPartSize, that the app shouldn't really know about.")]),e._v(" "),a("h4",{attrs:{id:"endblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endblock"}},[e._v("#")]),e._v(" EndBlock")]),e._v(" "),a("p",[e._v("The EndBlock response includes a "),a("code",[e._v("ConsensusParams")]),e._v(", which includes BlockSize and TxSize, but not BlockGossip.\nOther param struct can be added to "),a("code",[e._v("ConsensusParams")]),e._v(" in the future.\nThe "),a("code",[e._v("0")]),e._v(" value is used to denote no change.\nAny other value will update that parameter in the "),a("code",[e._v("State.ConsensusParams")]),e._v(", to be applied for the next block.\nTendermint should have hard-coded upper limits as sanity checks.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Implemented")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Alternative capacity limits and consensus parameters can be specified without re-compiling the software.")]),e._v(" "),a("li",[e._v("They can also change over time under the control of the application")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("More exposed parameters is more complexity")]),e._v(" "),a("li",[e._v("Different rules at different heights in the blockchain complicates fast sync")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("The TxSize, which checks validity, may be in conflict with the config's "),a("code",[e._v("max_block_size_tx")]),e._v(", which determines proposal sizes")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);
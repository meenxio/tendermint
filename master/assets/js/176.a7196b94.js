(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{619:function(e,t,i){"use strict";i.r(t);var a=i(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"light-client-specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#light-client-specification"}},[e._v("#")]),e._v(" Light Client Specification")]),e._v(" "),i("p",[e._v("This directory contains work-in-progress English and TLA+ specifications for the Light Client\nprotocol. Implementations of the light client can be found in\n"),i("a",{attrs:{href:"https://github.com/informalsystems/tendermint-rs/tree/master/light-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust"),i("OutboundLink")],1),e._v(" and\n"),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/light",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("Light clients are assumed to be initialized once from a trusted source\nwith a trusted header and validator set. The light client\nprotocol allows a client to then securely update its trusted state by requesting and\nverifying a minimal set of data from a network of full nodes (at least one of which is correct).")]),e._v(" "),i("p",[e._v("The light client is decomposed into two main components:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#Commit-Verification"}},[e._v("Commit Verification")]),e._v(" - verify signed headers and associated validator\nset changes from a single full node, called primary")]),e._v(" "),i("li",[i("a",{attrs:{href:"#Attack-Detection"}},[e._v("Attack Detection")]),e._v(" -  verify commits across multiple full nodes (called secondaries) and detect conflicts (ie. the existence of a lightclient attack)")])]),e._v(" "),i("p",[e._v('In case a lightclient attack is detected, the lightclient submits evidence to a full node which is responsible for "accountability", that is, punishing attackers:')]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#Accountability"}},[e._v("Accountability")]),e._v(" - given evidence for an attack, compute a set of validators that are responsible for it.")])]),e._v(" "),i("h2",{attrs:{id:"commit-verification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#commit-verification"}},[e._v("#")]),e._v(" Commit Verification")]),e._v(" "),i("p",[e._v("The "),i("RouterLink",{attrs:{to:"/spec/light-client/verification/verification_001_published.html"}},[e._v("English specification")]),e._v(" describes the light client\ncommit verification problem in terms of the temporal properties\n"),i("a",{attrs:{href:"https://github.com/informalsystems/tendermint-rs/blob/master/docs/spec/lightclient/verification/verification_001_published.md#lcv-dist-safe1",target:"_blank",rel:"noopener noreferrer"}},[e._v("LCV-DIST-SAFE.1"),i("OutboundLink")],1),e._v(" and\n"),i("a",{attrs:{href:"https://github.com/informalsystems/tendermint-rs/blob/master/docs/spec/lightclient/verification/verification_001_published.md#lcv-dist-live1",target:"_blank",rel:"noopener noreferrer"}},[e._v("LCV-DIST-LIVE.1"),i("OutboundLink")],1),e._v(".\nCommit verification is assumed to operate within the Tendermint Failure Model, where +2/3 of validators are correct for some time period and\nvalidator sets can change arbitrarily at each height.")],1),e._v(" "),i("p",[e._v("A light client protocol is also provided, including all checks that\nneed to be performed on headers, commits, and validator sets\nto satisfy the temporal properties - so a light client can continuously\nsynchronize with a blockchain. Clients can skip possibly\nmany intermediate headers by exploiting overlap in trusted and untrusted validator sets.\nWhen there is not enough overlap, a bisection routine can be used to find a\nminimal set of headers that do provide the required overlap.")]),e._v(" "),i("p",[e._v("The "),i("a",{attrs:{href:"verification/Lightclient_A_1.tla"}},[e._v("TLA+ specification ver. 001")]),e._v("\nis a formal description of the\ncommit verification protocol executed by a client, including the safety and\ntermination, which can be model checked with Apalache.")]),e._v(" "),i("p",[e._v("A more detailed TLA+ specification of\n"),i("a",{attrs:{href:"verification/Lightclient_003_draft.tla"}},[e._v("Light client verification ver. 003")]),e._v("\nis currently under peer review.")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("MC*.tla")]),e._v(" files contain concrete parameters for the\n"),i("a",{attrs:{href:"verification/Lightclient_A_1.tla"}},[e._v("TLA+ specification")]),e._v(", in order to do model checking.\nFor instance, "),i("a",{attrs:{href:"verification/MC4_3_faulty.tla"}},[e._v("MC4_3_faulty.tla")]),e._v(" contains the following parameters\nfor the nodes, heights, the trusting period, the clock drifts,\ncorrectness of the primary node, and the ratio of the faulty processes:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"tla",base64:"QWxsTm9kZXMgPT0geyZxdW90O24xJnF1b3Q7LCAmcXVvdDtuMiZxdW90OywgJnF1b3Q7bjMmcXVvdDssICZxdW90O240JnF1b3Q7fQpUUlVTVEVEX0hFSUdIVCA9PSAxClRBUkdFVF9IRUlHSFQgPT0gMwpUUlVTVElOR19QRVJJT0QgPT0gMTQwMCAgICAgXCogdGhlIHRydXN0aW5nIHBlcmlvZCBpbiBzb21lIHRpbWUgdW5pdHMKQ0xPQ0tfRFJJRlQgPSAxMCAgICAgICAgICAgIFwqIGhvdyBtdWNoIHdlIGFzc3VtZSB0aGUgbG9jYWwgY2xvY2sgaXMgZHJpZnRpbmcKUkVBTF9DTE9DS19EUklGVCA9IDMgICAgICAgIFwqIGhvdyBtdWNoIHRoZSBsb2NhbCBjbG9jayBpcyBhY3R1YWxseSBkcmlmdGluZwpJU19QUklNQVJZX0NPUlJFQ1QgPT0gRkFMU0UKRkFVTFRZX1JBVElPID09ICZsdDsmbHQ7MSwgMyZndDsmZ3Q7ICAgIFwqICZsdDsgMSAvIDMgZmF1bHR5IHZhbGlkYXRvcnMK"}}),e._v(" "),i("p",[e._v("To run a complete set of experiments, clone "),i("a",{attrs:{href:"https://github.com/informalsystems/apalache",target:"_blank",rel:"noopener noreferrer"}},[e._v("apalache"),i("OutboundLink")],1),e._v(" and "),i("a",{attrs:{href:"https://github.com/informalsystems/apalache-tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("apalache-tests"),i("OutboundLink")],1),e._v(" into a directory "),i("code",[e._v("$DIR")]),e._v(" and run the following commands:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JERJUi9hcGFsYWNoZS10ZXN0cy9zY3JpcHRzL21rLXJ1bi5weSAtLW1lbWxpbWl0IDI4IDAwMmJtYy1hcGFsYWNoZS1vay5jc3YgJERJUi9hcGFsYWNoZSAuIG91dAouL291dC9ydW4tYWxsLnNoCg=="}}),e._v(" "),i("p",[e._v("After the experiments have finished, you can collect the logs by executing the following command:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y2QgLi9vdXQKJERJUi9hcGFsYWNoZS10ZXN0cy9zY3JpcHRzL3BhcnNlLWxvZ3MucHkgLS1odW1hbiAuCg=="}}),e._v(" "),i("p",[e._v("All lines in "),i("code",[e._v("results.csv")]),e._v(" should report "),i("code",[e._v("Deadlock")]),e._v(", which means that the algorithm\nhas terminated and no invariant violation was found.")]),e._v(" "),i("p",[e._v("Similar to "),i("a",{attrs:{href:"verification/002bmc-apalache-ok.csv"}},[e._v("002bmc-apalache-ok.csv")]),e._v(",\nfile "),i("a",{attrs:{href:"verification/003bmc-apalache-error.csv"}},[e._v("003bmc-apalache-error.csv")]),e._v(" specifies\nthe set of experiments that should result in counterexamples:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JERJUi9hcGFsYWNoZS10ZXN0cy9zY3JpcHRzL21rLXJ1bi5weSAtLW1lbWxpbWl0IDI4IDAwM2JtYy1hcGFsYWNoZS1lcnJvci5jc3YgJERJUi9hcGFsYWNoZSAuIG91dAouL291dC9ydW4tYWxsLnNoCg=="}}),e._v(" "),i("p",[e._v("All lines in "),i("code",[e._v("results.csv")]),e._v(" should report "),i("code",[e._v("Error")]),e._v(".")]),e._v(" "),i("p",[e._v("The following table summarizes the experimental results for Light client verification\nversion 001. The TLA+ properties can be found in the\n"),i("a",{attrs:{href:"verification/Lightclient_A_1.tla"}},[e._v("TLA+ specification")]),e._v(".\nThe experiments were run in an AWS instance equipped with 32GB\nRAM and a 4-core Intel® Xeon® CPU E5-2686 v4 @ 2.30GHz CPU.\nWe write “✗=k” when a bug is reported at depth k, and “✓<=k” when\nno bug is reported up to depth k.")]),e._v(" "),i("p",[i("img",{attrs:{src:"experiments.png",alt:"Experimental results"}})]),e._v(" "),i("p",[e._v("The experimental results for version 003 are to be added.")]),e._v(" "),i("h2",{attrs:{id:"attack-detection"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#attack-detection"}},[e._v("#")]),e._v(" Attack Detection")]),e._v(" "),i("p",[e._v("The "),i("RouterLink",{attrs:{to:"/spec/light-client/detection/detection_003_reviewed.html"}},[e._v("English specification")]),e._v("\ndefines light client attacks (and how they differ from blockchain\nforks), and describes the problem of a light client detecting\nthese attacks by communicating with a network of full nodes,\nwhere at least one is correct.")],1),e._v(" "),i("p",[e._v("The specification also contains a detection protocol that checks\nwhether the header obtained from the primary via the verification\nprotocol matches corresponding headers provided by the secondaries.\nIf this is not the case, the protocol analyses the verification traces\nof the involved full nodes\nand generates\n"),i("RouterLink",{attrs:{to:"/spec/light-client/detection/detection_003_reviewed.html#tmbc-lc-evidence-data1"}},[e._v("evidence")]),e._v("\nof misbehavior that can be submitted to a full node so that\nthe faulty validators can be punished.")],1),e._v(" "),i("p",[e._v("The "),i("a",{attrs:{href:"detection/LCDetector_003_draft.tla"}},[e._v("TLA+ specification")]),e._v("\nis a formal description of the\ndetection protocol for two peers, including the safety and\ntermination, which can be model checked with Apalache.")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("LCD_MC*.tla")]),e._v(" files contain concrete parameters for the\n"),i("a",{attrs:{href:"detection/LCDetector_003_draft.tla"}},[e._v("TLA+ specification")]),e._v(",\nin order to run the model checker.\nFor instance, "),i("a",{attrs:{href:"detection/MC4_4_faulty.tla"}},[e._v("LCD_MC4_4_faulty.tla")]),e._v("\ncontains the following parameters\nfor the nodes, heights, the trusting period, the clock drifts,\ncorrectness of the nodes, and the ratio of the faulty processes:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"tla",base64:"QWxsTm9kZXMgPT0geyZxdW90O24xJnF1b3Q7LCAmcXVvdDtuMiZxdW90OywgJnF1b3Q7bjMmcXVvdDssICZxdW90O240JnF1b3Q7fQpUUlVTVEVEX0hFSUdIVCA9PSAxClRBUkdFVF9IRUlHSFQgPT0gMwpUUlVTVElOR19QRVJJT0QgPT0gMTQwMCAgICAgXCogdGhlIHRydXN0aW5nIHBlcmlvZCBpbiBzb21lIHRpbWUgdW5pdHMKQ0xPQ0tfRFJJRlQgPSAxMCAgICAgICAgICAgIFwqIGhvdyBtdWNoIHdlIGFzc3VtZSB0aGUgbG9jYWwgY2xvY2sgaXMgZHJpZnRpbmcKUkVBTF9DTE9DS19EUklGVCA9IDMgICAgICAgIFwqIGhvdyBtdWNoIHRoZSBsb2NhbCBjbG9jayBpcyBhY3R1YWxseSBkcmlmdGluZwpJU19QUklNQVJZX0NPUlJFQ1QgPT0gRkFMU0UKSVNfU0VDT05EQVJZX0NPUlJFQ1QgPT0gRkFMU0UKRkFVTFRZX1JBVElPID09ICZsdDsmbHQ7MSwgMyZndDsmZ3Q7ICAgIFwqICZsdDsgMSAvIDMgZmF1bHR5IHZhbGlkYXRvcnMK"}}),e._v(" "),i("p",[e._v("To run a complete set of experiments, clone "),i("a",{attrs:{href:"https://github.com/informalsystems/apalache",target:"_blank",rel:"noopener noreferrer"}},[e._v("apalache"),i("OutboundLink")],1),e._v(" and "),i("a",{attrs:{href:"https://github.com/informalsystems/apalache-tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("apalache-tests"),i("OutboundLink")],1),e._v(" into a directory "),i("code",[e._v("$DIR")]),e._v(" and run the following commands:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JERJUi9hcGFsYWNoZS10ZXN0cy9zY3JpcHRzL21rLXJ1bi5weSAtLW1lbWxpbWl0IDI4IDAwNGJtYy1hcGFsYWNoZS1vay5jc3YgJERJUi9hcGFsYWNoZSAuIG91dAouL291dC9ydW4tYWxsLnNoCg=="}}),e._v(" "),i("p",[e._v("After the experiments have finished, you can collect the logs by executing the following command:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y2QgLi9vdXQKJERJUi9hcGFsYWNoZS10ZXN0cy9zY3JpcHRzL3BhcnNlLWxvZ3MucHkgLS1odW1hbiAuCg=="}}),e._v(" "),i("p",[e._v("All lines in "),i("code",[e._v("results.csv")]),e._v(" should report "),i("code",[e._v("Deadlock")]),e._v(", which means that the algorithm\nhas terminated and no invariant violation was found.")]),e._v(" "),i("p",[e._v("Similar to "),i("a",{attrs:{href:"verification/004bmc-apalache-ok.csv"}},[e._v("004bmc-apalache-ok.csv")]),e._v(",\nfile "),i("a",{attrs:{href:"verification/005bmc-apalache-error.csv"}},[e._v("005bmc-apalache-error.csv")]),e._v(" specifies\nthe set of experiments that should result in counterexamples:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JERJUi9hcGFsYWNoZS10ZXN0cy9zY3JpcHRzL21rLXJ1bi5weSAtLW1lbWxpbWl0IDI4IDAwNWJtYy1hcGFsYWNoZS1lcnJvci5jc3YgJERJUi9hcGFsYWNoZSAuIG91dAouL291dC9ydW4tYWxsLnNoCg=="}}),e._v(" "),i("p",[e._v("All lines in "),i("code",[e._v("results.csv")]),e._v(" should report "),i("code",[e._v("Error")]),e._v(".")]),e._v(" "),i("p",[e._v("The detailed experimental results are to be added soon.")]),e._v(" "),i("h2",{attrs:{id:"accountability"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#accountability"}},[e._v("#")]),e._v(" Accountability")]),e._v(" "),i("p",[e._v("The "),i("RouterLink",{attrs:{to:"/spec/light-client/attacks/isolate-attackers_002_reviewed.html"}},[e._v("English specification")]),e._v("\ndefines the protocol that is executed on a full node upon receiving attack "),i("RouterLink",{attrs:{to:"/spec/light-client/detection/detection_003_reviewed.html#tmbc-lc-evidence-data1"}},[e._v("evidence")]),e._v(" from a lightclient. In particular, the protocol handles three types of attacks")],1),e._v(" "),i("ul",[i("li",[e._v("lunatic")]),e._v(" "),i("li",[e._v("equivocation")]),e._v(" "),i("li",[e._v("amnesia")])]),e._v(" "),i("p",[e._v("We discussed in the "),i("RouterLink",{attrs:{to:"/spec/light-client/attacks/isolate-attackers_002_reviewed.html#Part-III---Completeness"}},[e._v("last part")]),e._v(" of the English specification\nthat the non-lunatic cases are defined by having the same validator set in the conflicting blocks. For these cases,\ncomputer-aided analysis of  "),i("RouterLink",{attrs:{to:"/spec/light-client/accountability/"}},[e._v("Tendermint Consensus in TLA+")]),e._v(" shows that equivocation and amnesia capture all non-lunatic attacks.")],1),e._v(" "),i("p",[e._v("The "),i("a",{attrs:{href:"attacks/Isolation_001_draft.tla"}},[e._v("TLA+ specification")]),e._v("\nis a formal description of the\nprotocol, including the safety property, which can be model checked with Apalache.")]),e._v(" "),i("p",[e._v("Similar to the other specifications, "),i("a",{attrs:{href:"attacks/MC_5_3.tla"}},[e._v("MC_5_3.tla")]),e._v(" contains concrete parameters to run the model checker. The specification can be checked within seconds.")]),e._v(" "),i("p",[i("RouterLink",{attrs:{to:"/spec/light-client/accountability/"}},[e._v("tendermint-accountability")])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);
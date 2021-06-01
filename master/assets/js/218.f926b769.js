(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{606:function(e,t,o){"use strict";o.r(t);var n=o(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"using-tendermint"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-tendermint"}},[e._v("#")]),e._v(" Using Tendermint")]),e._v(" "),o("p",[e._v("This is a guide to using the "),o("code",[e._v("tendermint")]),e._v(" program from the command line.\nIt assumes only that you have the "),o("code",[e._v("tendermint")]),e._v(" binary installed and have\nsome rudimentary idea of what Tendermint and ABCI are.")]),e._v(" "),o("p",[e._v("You can see the help menu with "),o("code",[e._v("tendermint --help")]),e._v(", and the version\nnumber with "),o("code",[e._v("tendermint version")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"directory-root"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#directory-root"}},[e._v("#")]),e._v(" Directory Root")]),e._v(" "),o("p",[e._v("The default directory for blockchain data is "),o("code",[e._v("~/.tendermint")]),e._v(". Override\nthis by setting the "),o("code",[e._v("TMHOME")]),e._v(" environment variable.")]),e._v(" "),o("h2",{attrs:{id:"initialize"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#initialize"}},[e._v("#")]),e._v(" Initialize")]),e._v(" "),o("p",[e._v("Initialize the root directory by running:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBpbml0IHZhbGlkYXRvcgo="}}),e._v(" "),o("p",[e._v("This will create a new private key ("),o("code",[e._v("priv_validator_key.json")]),e._v("), and a\ngenesis file ("),o("code",[e._v("genesis.json")]),e._v(") containing the associated public key, in\n"),o("code",[e._v("$TMHOME/config")]),e._v(". This is all that's necessary to run a local testnet\nwith one validator.")]),e._v(" "),o("p",[e._v("For more elaborate initialization, see the testnet command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCB0ZXN0bmV0IC0taGVscAo="}}),e._v(" "),o("h3",{attrs:{id:"genesis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#genesis"}},[e._v("#")]),e._v(" Genesis")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("genesis.json")]),e._v(" file in "),o("code",[e._v("$TMHOME/config/")]),e._v(" defines the initial\nTendermintCore state upon genesis of the blockchain ("),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/types/genesis.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("see\ndefinition"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("h4",{attrs:{id:"fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fields"}},[e._v("#")]),e._v(" Fields")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("genesis_time")]),e._v(": Official time of blockchain start.")]),e._v(" "),o("li",[o("code",[e._v("chain_id")]),e._v(": ID of the blockchain. "),o("strong",[e._v("This must be unique for\nevery blockchain.")]),e._v(" If your testnet blockchains do not have unique\nchain IDs, you will have a bad time. The ChainID must be less than 50 symbols.")]),e._v(" "),o("li",[o("code",[e._v("initial_height")]),e._v(": Height at which Tendermint should begin at. If a blockchain is conducting a network upgrade,\nstarting from the stopped height brings uniqueness to previous heights.")]),e._v(" "),o("li",[o("code",[e._v("consensus_params")]),e._v(" "),o("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/spec/core/state.md#consensusparams",target:"_blank",rel:"noopener noreferrer"}},[e._v("spec"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[o("code",[e._v("block")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("max_bytes")]),e._v(": Max block size, in bytes.")]),e._v(" "),o("li",[o("code",[e._v("max_gas")]),e._v(": Max gas per block.")]),e._v(" "),o("li",[o("code",[e._v("time_iota_ms")]),e._v(": Unused. This has been deprecated and will be removed in a future version.")])])]),e._v(" "),o("li",[o("code",[e._v("evidence")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("max_age_num_blocks")]),e._v(": Max age of evidence, in blocks. The basic formula\nfor calculating this is: MaxAgeDuration / {average block time}.")]),e._v(" "),o("li",[o("code",[e._v("max_age_duration")]),e._v(': Max age of evidence, in time. It should correspond\nwith an app\'s "unbonding period" or other similar mechanism for handling\n'),o("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nothing-At-Stake\nattacks"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("max_num")]),e._v(": This sets the maximum number of evidence that can be committed\nin a single block. and should fall comfortably under the max block\nbytes when we consider the size of each evidence.")])])]),e._v(" "),o("li",[o("code",[e._v("validator")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("pub_key_types")]),e._v(": Public key types validators can use.")])])]),e._v(" "),o("li",[o("code",[e._v("version")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("app_version")]),e._v(": ABCI application version.")])])])])]),e._v(" "),o("li",[o("code",[e._v("validators")]),e._v(": List of initial validators. Note this may be overridden entirely by the\napplication, and may be left empty to make explicit that the\napplication will initialize the validator set with ResponseInitChain.\n"),o("ul",[o("li",[o("code",[e._v("pub_key")]),e._v(": The first element specifies the "),o("code",[e._v("pub_key")]),e._v(" type. 1\n== Ed25519. The second element are the pubkey bytes.")]),e._v(" "),o("li",[o("code",[e._v("power")]),e._v(": The validator's voting power.")]),e._v(" "),o("li",[o("code",[e._v("name")]),e._v(": Name of the validator (optional).")])])]),e._v(" "),o("li",[o("code",[e._v("app_hash")]),e._v(": The expected application hash (as returned by the\n"),o("code",[e._v("ResponseInfo")]),e._v(" ABCI message) upon genesis. If the app's hash does\nnot match, Tendermint will panic.")]),e._v(" "),o("li",[o("code",[e._v("app_state")]),e._v(": The application state (e.g. initial distribution\nof tokens).")])]),e._v(" "),o("blockquote",[o("p",[e._v("⚠️ "),o("strong",[e._v("ChainID must be unique to every blockchain. Reusing old chainID can cause issues")])])]),e._v(" "),o("h4",{attrs:{id:"sample-genesis-json"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sample-genesis-json"}},[e._v("#")]),e._v(" Sample genesis.json")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2dlbmVzaXNfdGltZSZxdW90OzogJnF1b3Q7MjAyMC0wNC0yMVQxMToxNzo0Mi4zNDEyMjc4NjhaJnF1b3Q7LAogICZxdW90O2NoYWluX2lkJnF1b3Q7OiAmcXVvdDt0ZXN0LWNoYWluLVJPcDlLRiZxdW90OywKICAmcXVvdDtpbml0aWFsX2hlaWdodCZxdW90OzogJnF1b3Q7MCZxdW90OywKICAmcXVvdDtjb25zZW5zdXNfcGFyYW1zJnF1b3Q7OiB7CiAgICAmcXVvdDtibG9jayZxdW90OzogewogICAgICAmcXVvdDttYXhfYnl0ZXMmcXVvdDs6ICZxdW90OzIyMDIwMDk2JnF1b3Q7LAogICAgICAmcXVvdDttYXhfZ2FzJnF1b3Q7OiAmcXVvdDstMSZxdW90OywKICAgICAgJnF1b3Q7dGltZV9pb3RhX21zJnF1b3Q7OiAmcXVvdDsxMDAwJnF1b3Q7CiAgICB9LAogICAgJnF1b3Q7ZXZpZGVuY2UmcXVvdDs6IHsKICAgICAgJnF1b3Q7bWF4X2FnZV9udW1fYmxvY2tzJnF1b3Q7OiAmcXVvdDsxMDAwMDAmcXVvdDssCiAgICAgICZxdW90O21heF9hZ2VfZHVyYXRpb24mcXVvdDs6ICZxdW90OzE3MjgwMDAwMDAwMDAwMCZxdW90OywKICAgICAgJnF1b3Q7bWF4X251bSZxdW90OzogNTAsCiAgICB9LAogICAgJnF1b3Q7dmFsaWRhdG9yJnF1b3Q7OiB7CiAgICAgICZxdW90O3B1Yl9rZXlfdHlwZXMmcXVvdDs6IFsKICAgICAgICAmcXVvdDtlZDI1NTE5JnF1b3Q7CiAgICAgIF0KICAgIH0KICB9LAogICZxdW90O3ZhbGlkYXRvcnMmcXVvdDs6IFsKICAgIHsKICAgICAgJnF1b3Q7YWRkcmVzcyZxdW90OzogJnF1b3Q7QjU0N0FCODdFNzlGNzVBNEEzMTk4QzU3QThDMkZEQUY4NjI4Q0I0NyZxdW90OywKICAgICAgJnF1b3Q7cHViX2tleSZxdW90OzogewogICAgICAgICZxdW90O3R5cGUmcXVvdDs6ICZxdW90O3RlbmRlcm1pbnQvUHViS2V5RWQyNTUxOSZxdW90OywKICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7UC9WNkdIdVpyYjhycy9rMW9Cb3J4YzZ2eVhNbG56aEptdjdMbWpFTER5cz0mcXVvdDsKICAgICAgfSwKICAgICAgJnF1b3Q7cG93ZXImcXVvdDs6ICZxdW90OzEwJnF1b3Q7LAogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDsmcXVvdDsKICAgIH0KICBdLAogICZxdW90O2FwcF9oYXNoJnF1b3Q7OiAmcXVvdDsmcXVvdDsKfQo="}}),e._v(" "),o("h2",{attrs:{id:"run"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[e._v("#")]),e._v(" Run")]),e._v(" "),o("p",[e._v("To run a Tendermint node, use:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dGVuZGVybWludCBzdGFydAo="}}),e._v(" "),o("p",[e._v("By default, Tendermint will try to connect to an ABCI application on\n"),o("code",[e._v("127.0.0.1:26658")]),e._v(". If you have the "),o("code",[e._v("kvstore")]),e._v(" ABCI app installed, run it in\nanother window. If you don't, kill Tendermint and run an in-process version of\nthe "),o("code",[e._v("kvstore")]),e._v(" app:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dGVuZGVybWludCBzdGFydCAtLXByb3h5LWFwcD1rdnN0b3JlCg=="}}),e._v(" "),o("p",[e._v("After a few seconds, you should see blocks start streaming in. Note that blocks\nare produced regularly, even if there are no transactions. See "),o("em",[e._v("No Empty\nBlocks")]),e._v(", below, to modify this setting.")]),e._v(" "),o("p",[e._v("Tendermint supports in-process versions of the "),o("code",[e._v("counter")]),e._v(", "),o("code",[e._v("kvstore")]),e._v(", and "),o("code",[e._v("noop")]),e._v("\napps that ship as examples with "),o("code",[e._v("abci-cli")]),e._v(". It's easy to compile your app\nin-process with Tendermint if it's written in Go. If your app is not written in\nGo, run it in another process, and use the "),o("code",[e._v("--proxy-app")]),e._v(" flag to specify the\naddress of the socket it is listening on, for instance:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dGVuZGVybWludCBzdGFydCAtLXByb3h5LWFwcD0vdmFyL3J1bi9hYmNpLnNvY2sK"}}),e._v(" "),o("p",[e._v("You can find out what flags are supported by running "),o("code",[e._v("tendermint start --help")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"transactions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),o("p",[e._v("To send a transaction, use "),o("code",[e._v("curl")]),e._v(" to make requests to the Tendermint RPC\nserver, for example:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCBodHRwOi8vbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9XCZxdW90O2FiY2RcJnF1b3Q7Cg=="}}),e._v(" "),o("p",[e._v("We can see the chain's status at the "),o("code",[e._v("/status")]),e._v(" end-point:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCBodHRwOi8vbG9jYWxob3N0OjI2NjU3L3N0YXR1cyB8IGpzb25fcHAK"}}),e._v(" "),o("p",[e._v("and the "),o("code",[e._v("latest_app_hash")]),e._v(" in particular:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCBodHRwOi8vbG9jYWxob3N0OjI2NjU3L3N0YXR1cyB8IGpzb25fcHAgfCBncmVwIGxhdGVzdF9hcHBfaGFzaAo="}}),e._v(" "),o("p",[e._v("Visit "),o("code",[e._v("http://localhost:26657")]),e._v(" in your browser to see the list of other\nendpoints. Some take no arguments (like "),o("code",[e._v("/status")]),e._v("), while others specify\nthe argument name and use "),o("code",[e._v("_")]),e._v(" as a placeholder.")]),e._v(" "),o("blockquote",[o("p",[e._v("TIP: Find the RPC Documentation "),o("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)])]),e._v(" "),o("h3",{attrs:{id:"formatting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#formatting"}},[e._v("#")]),e._v(" Formatting")]),e._v(" "),o("p",[e._v("The following nuances when sending/formatting transactions should be\ntaken into account:")]),e._v(" "),o("p",[e._v("With "),o("code",[e._v("GET")]),e._v(":")]),e._v(" "),o("p",[e._v("To send a UTF8 string byte array, quote the value of the tx parameter:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAnaHR0cDovL2xvY2FsaG9zdDoyNjY1Ny9icm9hZGNhc3RfdHhfY29tbWl0P3R4PSZxdW90O2hlbGxvJnF1b3Q7Jwo="}}),e._v(" "),o("p",[e._v('which sends a 5 byte transaction: "h e l l o" [68 65 6c 6c 6f].')]),e._v(" "),o("p",[e._v("Note the URL must be wrapped with single quotes, else bash will ignore\nthe double quotes. To avoid the single quotes, escape the double quotes:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCBodHRwOi8vbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9XCZxdW90O2hlbGxvXCZxdW90Owo="}}),e._v(" "),o("p",[e._v("Using a special character:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAnaHR0cDovL2xvY2FsaG9zdDoyNjY1Ny9icm9hZGNhc3RfdHhfY29tbWl0P3R4PSZxdW90O+KCrDUmcXVvdDsnCg=="}}),e._v(" "),o("p",[e._v('sends a 4 byte transaction: "€5" (UTF8) [e2 82 ac 35].')]),e._v(" "),o("p",[e._v("To send as raw hex, omit quotes AND prefix the hex string with "),o("code",[e._v("0x")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCBodHRwOi8vbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9MHgwMTAyMDMwNAo="}}),e._v(" "),o("p",[e._v("which sends a 4 byte transaction: [01 02 03 04].")]),e._v(" "),o("p",[e._v("With "),o("code",[e._v("POST")]),e._v(" (using "),o("code",[e._v("json")]),e._v("), the raw hex must be "),o("code",[e._v("base64")]),e._v(" encoded:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtLWRhdGEtYmluYXJ5ICd7JnF1b3Q7anNvbnJwYyZxdW90OzomcXVvdDsyLjAmcXVvdDssJnF1b3Q7aWQmcXVvdDs6JnF1b3Q7YW55dGhpbmcmcXVvdDssJnF1b3Q7bWV0aG9kJnF1b3Q7OiZxdW90O2Jyb2FkY2FzdF90eF9jb21taXQmcXVvdDssJnF1b3Q7cGFyYW1zJnF1b3Q7OiB7JnF1b3Q7dHgmcXVvdDs6ICZxdW90O0FRSURCQT09JnF1b3Q7fX0nIC1IICdjb250ZW50LXR5cGU6dGV4dC9wbGFpbjsnIGh0dHA6Ly9sb2NhbGhvc3Q6MjY2NTcK"}}),e._v(" "),o("p",[e._v("which sends the same 4 byte transaction: [01 02 03 04].")]),e._v(" "),o("p",[e._v("Note that raw hex cannot be used in "),o("code",[e._v("POST")]),e._v(" transactions.")]),e._v(" "),o("h2",{attrs:{id:"reset"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[e._v("#")]),e._v(" Reset")]),e._v(" "),o("blockquote",[o("p",[e._v("⚠️ "),o("strong",[e._v("UNSAFE")]),e._v(" Only do this in development and only if you can\nafford to lose all blockchain data!")])]),e._v(" "),o("p",[e._v("To reset a blockchain, stop the node and run:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCB1bnNhZmVfcmVzZXRfYWxsCg=="}}),e._v(" "),o("p",[e._v("This command will remove the data directory and reset private validator and\naddress book files.")]),e._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("p",[e._v("Tendermint uses a "),o("code",[e._v("config.toml")]),e._v(" for configuration. For details, see "),o("RouterLink",{attrs:{to:"/tendermint-core/configuration.html"}},[e._v("the\nconfig specification")]),e._v(".")],1),e._v(" "),o("p",[e._v("Notable options include the socket address of the application\n("),o("code",[e._v("proxy-app")]),e._v("), the listening address of the Tendermint peer\n("),o("code",[e._v("p2p.laddr")]),e._v("), and the listening address of the RPC server\n("),o("code",[e._v("rpc.laddr")]),e._v(").")]),e._v(" "),o("p",[e._v("Some fields from the config file can be overwritten with flags.")]),e._v(" "),o("h2",{attrs:{id:"no-empty-blocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-empty-blocks"}},[e._v("#")]),e._v(" No Empty Blocks")]),e._v(" "),o("p",[e._v("While the default behavior of "),o("code",[e._v("tendermint")]),e._v(" is still to create blocks\napproximately once per second, it is possible to disable empty blocks or\nset a block creation interval. In the former case, blocks will be\ncreated when there are new transactions or when the AppHash changes.")]),e._v(" "),o("p",[e._v("To configure Tendermint to not produce empty blocks unless there are\ntransactions or the app hash changes, run Tendermint with this\nadditional flag:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBzdGFydCAtLWNvbnNlbnN1cy5jcmVhdGVfZW1wdHlfYmxvY2tzPWZhbHNlCg=="}}),e._v(" "),o("p",[e._v("or set the configuration via the "),o("code",[e._v("config.toml")]),e._v(" file:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W2NvbnNlbnN1c10KY3JlYXRlX2VtcHR5X2Jsb2NrcyA9IGZhbHNlCg=="}}),e._v(" "),o("p",[e._v("Remember: because the default is to "),o("em",[e._v("create empty blocks")]),e._v(", avoiding\nempty blocks requires the config option to be set to "),o("code",[e._v("false")]),e._v(".")]),e._v(" "),o("p",[e._v("The block interval setting allows for a delay (in time.Duration format "),o("a",{attrs:{href:"https://golang.org/pkg/time/#ParseDuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("ParseDuration"),o("OutboundLink")],1),e._v(") between the\ncreation of each new empty block. It can be set with this additional flag:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"LS1jb25zZW5zdXMuY3JlYXRlX2VtcHR5X2Jsb2Nrc19pbnRlcnZhbD0mcXVvdDs1cyZxdW90Owo="}}),e._v(" "),o("p",[e._v("or set the configuration via the "),o("code",[e._v("config.toml")]),e._v(" file:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W2NvbnNlbnN1c10KY3JlYXRlX2VtcHR5X2Jsb2Nrc19pbnRlcnZhbCA9ICZxdW90OzVzJnF1b3Q7Cg=="}}),e._v(" "),o("p",[e._v("With this setting, empty blocks will be produced every 5s if no block\nhas been produced otherwise, regardless of the value of\n"),o("code",[e._v("create_empty_blocks")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"broadcast-api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#broadcast-api"}},[e._v("#")]),e._v(" Broadcast API")]),e._v(" "),o("p",[e._v("Earlier, we used the "),o("code",[e._v("broadcast_tx_commit")]),e._v(" endpoint to send a\ntransaction. When a transaction is sent to a Tendermint node, it will\nrun via "),o("code",[e._v("CheckTx")]),e._v(" against the application. If it passes "),o("code",[e._v("CheckTx")]),e._v(", it\nwill be included in the mempool, broadcasted to other peers, and\neventually included in a block.")]),e._v(" "),o("p",[e._v("Since there are multiple phases to processing a transaction, we offer\nmultiple endpoints to broadcast a transaction:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"L2Jyb2FkY2FzdF90eF9hc3luYwovYnJvYWRjYXN0X3R4X3N5bmMKL2Jyb2FkY2FzdF90eF9jb21taXQK"}}),e._v(" "),o("p",[e._v("These correspond to no-processing, processing through the mempool, and\nprocessing through a block, respectively. That is, "),o("code",[e._v("broadcast_tx_async")]),e._v(",\nwill return right away without waiting to hear if the transaction is\neven valid, while "),o("code",[e._v("broadcast_tx_sync")]),e._v(" will return with the result of\nrunning the transaction through "),o("code",[e._v("CheckTx")]),e._v(". Using "),o("code",[e._v("broadcast_tx_commit")]),e._v("\nwill wait until the transaction is committed in a block or until some\ntimeout is reached, but will return right away if the transaction does\nnot pass "),o("code",[e._v("CheckTx")]),e._v(". The return value for "),o("code",[e._v("broadcast_tx_commit")]),e._v(" includes\ntwo fields, "),o("code",[e._v("check_tx")]),e._v(" and "),o("code",[e._v("deliver_tx")]),e._v(", pertaining to the result of\nrunning the transaction through those ABCI messages.")]),e._v(" "),o("p",[e._v("The benefit of using "),o("code",[e._v("broadcast_tx_commit")]),e._v(" is that the request returns\nafter the transaction is committed (i.e. included in a block), but that\ncan take on the order of a second. For a quick result, use\n"),o("code",[e._v("broadcast_tx_sync")]),e._v(", but the transaction will not be committed until\nlater, and by that point its effect on the state may change.")]),e._v(" "),o("p",[e._v("Note the mempool does not provide strong guarantees - just because a tx passed\nCheckTx (ie. was accepted into the mempool), doesn't mean it will be committed,\nas nodes with the tx in their mempool may crash before they get to propose.\nFor more information, see the "),o("RouterLink",{attrs:{to:"/tendermint-core/running-in-production.html#mempool-wal"}},[e._v("mempool\nwrite-ahead-log")])],1),e._v(" "),o("h2",{attrs:{id:"tendermint-networks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-networks"}},[e._v("#")]),e._v(" Tendermint Networks")]),e._v(" "),o("p",[e._v("When "),o("code",[e._v("tendermint init")]),e._v(" is run, both a "),o("code",[e._v("genesis.json")]),e._v(" and\n"),o("code",[e._v("priv_validator_key.json")]),e._v(" are created in "),o("code",[e._v("~/.tendermint/config")]),e._v(". The\n"),o("code",[e._v("genesis.json")]),e._v(" might look like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3ZhbGlkYXRvcnMmcXVvdDsgOiBbCiAgICB7CiAgICAgICZxdW90O3B1Yl9rZXkmcXVvdDsgOiB7CiAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDsgOiAmcXVvdDtoM2hrK1FFOGM2UUxUeVNwOFRjZnpjbEp3L0JHNzl6aUdCL3BJQStEZlBFPSZxdW90OywKICAgICAgICAmcXVvdDt0eXBlJnF1b3Q7IDogJnF1b3Q7dGVuZGVybWludC9QdWJLZXlFZDI1NTE5JnF1b3Q7CiAgICAgIH0sCiAgICAgICZxdW90O3Bvd2VyJnF1b3Q7IDogMTAsCiAgICAgICZxdW90O25hbWUmcXVvdDsgOiAmcXVvdDsmcXVvdDsKICAgIH0KICBdLAogICZxdW90O2FwcF9oYXNoJnF1b3Q7IDogJnF1b3Q7JnF1b3Q7LAogICZxdW90O2NoYWluX2lkJnF1b3Q7IDogJnF1b3Q7dGVzdC1jaGFpbi1yRGxZU04mcXVvdDssCiAgJnF1b3Q7Z2VuZXNpc190aW1lJnF1b3Q7IDogJnF1b3Q7MDAwMS0wMS0wMVQwMDowMDowMFomcXVvdDsKfQo="}}),e._v(" "),o("p",[e._v("And the "),o("code",[e._v("priv_validator_key.json")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2xhc3Rfc3RlcCZxdW90OyA6IDAsCiAgJnF1b3Q7bGFzdF9yb3VuZCZxdW90OyA6ICZxdW90OzAmcXVvdDssCiAgJnF1b3Q7YWRkcmVzcyZxdW90OyA6ICZxdW90O0I3ODhERURFNEY1MEFEOEJDOTQ2MkRFNzY3NDFDQ0FGRjg3RDUxRTImcXVvdDssCiAgJnF1b3Q7cHViX2tleSZxdW90OyA6IHsKICAgICZxdW90O3ZhbHVlJnF1b3Q7IDogJnF1b3Q7aDNoaytRRThjNlFMVHlTcDhUY2Z6Y2xKdy9CRzc5emlHQi9wSUErRGZQRT0mcXVvdDssCiAgICAmcXVvdDt0eXBlJnF1b3Q7IDogJnF1b3Q7dGVuZGVybWludC9QdWJLZXlFZDI1NTE5JnF1b3Q7CiAgfSwKICAmcXVvdDtsYXN0X2hlaWdodCZxdW90OyA6ICZxdW90OzAmcXVvdDssCiAgJnF1b3Q7cHJpdl9rZXkmcXVvdDsgOiB7CiAgICAmcXVvdDt2YWx1ZSZxdW90OyA6ICZxdW90O0pQaXZsODJ4K0xmVmtwOGkzenRvVGpZNmM2R0o0cEJ4UWV4RXJPQ3lod3FIZUdUNUFUeHpwQXRQSktueE54L055VW5EOEVidjNPSVlIK2tnRDROODhRPT0mcXVvdDssCiAgICAmcXVvdDt0eXBlJnF1b3Q7IDogJnF1b3Q7dGVuZGVybWludC9Qcml2S2V5RWQyNTUxOSZxdW90OwogIH0KfQo="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("priv_validator_key.json")]),e._v(" actually contains a private key, and should\nthus be kept absolutely secret; for now we work with the plain text.\nNote the "),o("code",[e._v("last_")]),e._v(" fields, which are used to prevent us from signing\nconflicting messages.")]),e._v(" "),o("p",[e._v("Note also that the "),o("code",[e._v("pub_key")]),e._v(" (the public key) in the\n"),o("code",[e._v("priv_validator_key.json")]),e._v(" is also present in the "),o("code",[e._v("genesis.json")]),e._v(".")]),e._v(" "),o("p",[e._v("The genesis file contains the list of public keys which may participate\nin the consensus, and their corresponding voting power. Greater than 2/3\nof the voting power must be active (i.e. the corresponding private keys\nmust be producing signatures) for the consensus to make progress. In our\ncase, the genesis file contains the public key of our\n"),o("code",[e._v("priv_validator_key.json")]),e._v(", so a Tendermint node started with the default\nroot directory will be able to make progress. Voting power uses an int64\nbut must be positive, thus the range is: 0 through 9223372036854775807.\nBecause of how the current proposer selection algorithm works, we do not\nrecommend having voting powers greater than 10^12 (ie. 1 trillion).")]),e._v(" "),o("p",[e._v("If we want to add more nodes to the network, we have two choices: we can\nadd a new validator node, who will also participate in the consensus by\nproposing blocks and voting on them, or we can add a new non-validator\nnode, who will not participate directly, but will verify and keep up\nwith the consensus protocol.")]),e._v(" "),o("h3",{attrs:{id:"peers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#peers"}},[e._v("#")]),e._v(" Peers")]),e._v(" "),o("h4",{attrs:{id:"seed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#seed"}},[e._v("#")]),e._v(" Seed")]),e._v(" "),o("p",[e._v("A seed node is a node who relays the addresses of other peers which they know\nof. These nodes constantly crawl the network to try to get more peers. The\naddresses which the seed node relays get saved into a local address book. Once\nthese are in the address book, you will connect to those addresses directly.\nBasically the seed nodes job is just to relay everyones addresses. You won't\nconnect to seed nodes once you have received enough addresses, so typically you\nonly need them on the first start. The seed node will immediately disconnect\nfrom you after sending you some addresses.")]),e._v(" "),o("h4",{attrs:{id:"persistent-peer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#persistent-peer"}},[e._v("#")]),e._v(" Persistent Peer")]),e._v(" "),o("p",[e._v("Persistent peers are people you want to be constantly connected with. If you\ndisconnect you will try to connect directly back to them as opposed to using\nanother address from the address book. On restarts you will always try to\nconnect to these peers regardless of the size of your address book.")]),e._v(" "),o("p",[e._v("All peers relay peers they know of by default. This is called the peer exchange\nprotocol (PeX). With PeX, peers will be gossiping about known peers and forming\na network, storing peer addresses in the addrbook. Because of this, you don't\nhave to use a seed node if you have a live persistent peer.")]),e._v(" "),o("h4",{attrs:{id:"connecting-to-peers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-peers"}},[e._v("#")]),e._v(" Connecting to Peers")]),e._v(" "),o("p",[e._v("To connect to peers on start-up, specify them in the\n"),o("code",[e._v("$TMHOME/config/config.toml")]),e._v(" or on the command line. Use "),o("code",[e._v("seeds")]),e._v(" to\nspecify seed nodes, and\n"),o("code",[e._v("persistent-peers")]),e._v(" to specify peers that your node will maintain\npersistent connections with.")]),e._v(" "),o("p",[e._v("For example,")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBzdGFydCAtLXAycC5zZWVkcyAmcXVvdDtmOWJhZWFhMTVmZWRmNWUxZWY3NDQ4ZGQ2MGY0NmMwMWYxYTllOWM0QDEuMi4zLjQ6MjY2NTYsMDQ5MWQzNzNhOGUwZmNmMTAyM2FhZjE4YzUxZDZhMWQwZDRmMzFiZEA1LjYuNy44OjI2NjU2JnF1b3Q7Cg=="}}),e._v(" "),o("p",[e._v("Alternatively, you can use the "),o("code",[e._v("/dial_seeds")]),e._v(" endpoint of the RPC to\nspecify seeds for a running node to connect to:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAnbG9jYWxob3N0OjI2NjU3L2RpYWxfc2VlZHM/c2VlZHM9XFsmcXVvdDtmOWJhZWFhMTVmZWRmNWUxZWY3NDQ4ZGQ2MGY0NmMwMWYxYTllOWM0QDEuMi4zLjQ6MjY2NTYmcXVvdDssJnF1b3Q7MDQ5MWQzNzNhOGUwZmNmMTAyM2FhZjE4YzUxZDZhMWQwZDRmMzFiZEA1LjYuNy44OjI2NjU2JnF1b3Q7XF0nCg=="}}),e._v(" "),o("p",[e._v("Note, with PeX enabled, you\nshould not need seeds after the first start.")]),e._v(" "),o("p",[e._v("If you want Tendermint to connect to specific set of addresses and\nmaintain a persistent connection with each, you can use the\n"),o("code",[e._v("--p2p.persistent-peers")]),e._v(" flag or the corresponding setting in the\n"),o("code",[e._v("config.toml")]),e._v(" or the "),o("code",[e._v("/dial_peers")]),e._v(" RPC endpoint to do it without\nstopping Tendermint core instance.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBzdGFydCAtLXAycC5wZXJzaXN0ZW50LXBlZXJzICZxdW90OzQyOWZjZjI1OTc0MzEzYjk1NjczZjU4ZDc3ZWFjZGQ0MzQ0MDI2NjVAMTAuMTEuMTIuMTM6MjY2NTYsOTY2NjNhM2RkMGQ3YjlkMTdkNGM4MjExYjE5MWFmMjU5NjIxYzY5M0AxMC4xMS4xMi4xNDoyNjY1NiZxdW90OwoKY3VybCAnbG9jYWxob3N0OjI2NjU3L2RpYWxfcGVlcnM/cGVyc2lzdGVudD10cnVlJmFtcDtwZWVycz1cWyZxdW90OzQyOWZjZjI1OTc0MzEzYjk1NjczZjU4ZDc3ZWFjZGQ0MzQ0MDI2NjVAMTAuMTEuMTIuMTM6MjY2NTYmcXVvdDssJnF1b3Q7OTY2NjNhM2RkMGQ3YjlkMTdkNGM4MjExYjE5MWFmMjU5NjIxYzY5M0AxMC4xMS4xMi4xNDoyNjY1NiZxdW90O1xdJwo="}}),e._v(" "),o("h3",{attrs:{id:"adding-a-non-validator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-non-validator"}},[e._v("#")]),e._v(" Adding a Non-Validator")]),e._v(" "),o("p",[e._v("Adding a non-validator is simple. Just copy the original "),o("code",[e._v("genesis.json")]),e._v("\nto "),o("code",[e._v("~/.tendermint/config")]),e._v(" on the new machine and start the node,\nspecifying seeds or persistent peers as necessary. If no seeds or\npersistent peers are specified, the node won't make any blocks, because\nit's not a validator, and it won't hear about any blocks, because it's\nnot connected to the other peer.")]),e._v(" "),o("h3",{attrs:{id:"adding-a-validator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-validator"}},[e._v("#")]),e._v(" Adding a Validator")]),e._v(" "),o("p",[e._v("The easiest way to add new validators is to do it in the "),o("code",[e._v("genesis.json")]),e._v(",\nbefore starting the network. For instance, we could make a new\n"),o("code",[e._v("priv_validator_key.json")]),e._v(", and copy it's "),o("code",[e._v("pub_key")]),e._v(" into the above genesis.")]),e._v(" "),o("p",[e._v("We can generate a new "),o("code",[e._v("priv_validator_key.json")]),e._v(" with the command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBnZW5fdmFsaWRhdG9yCg=="}}),e._v(" "),o("p",[e._v("Now we can update our genesis file. For instance, if the new\n"),o("code",[e._v("priv_validator_key.json")]),e._v(" looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2FkZHJlc3MmcXVvdDsgOiAmcXVvdDs1QUY0OUQyQTJENEY1QUQ0QzdDOEM0Q0MyRkIwMjAxMzFFOUM0OTAyJnF1b3Q7LAogICZxdW90O3B1Yl9rZXkmcXVvdDsgOiB7CiAgICAmcXVvdDt2YWx1ZSZxdW90OyA6ICZxdW90O2w5WDkrZmprZUJ6RGZQR2JVTTdBTUlSRTZ1Sk43OHpONStsazVPWW90ZWs9JnF1b3Q7LAogICAgJnF1b3Q7dHlwZSZxdW90OyA6ICZxdW90O3RlbmRlcm1pbnQvUHViS2V5RWQyNTUxOSZxdW90OwogIH0sCiAgJnF1b3Q7cHJpdl9rZXkmcXVvdDsgOiB7CiAgICAmcXVvdDt2YWx1ZSZxdW90OyA6ICZxdW90O0VESlk5VzZ6bEF3K3N1NklUZ1RLZzJuVFpjSEFIMU5NVFc1aXdsZ21ORHVYMWYzNStPUjRITU44OFp0UXpzQXdoRVRxNGszdnpNM242V1RrNWlpMTZRPT0mcXVvdDssCiAgICAmcXVvdDt0eXBlJnF1b3Q7IDogJnF1b3Q7dGVuZGVybWludC9Qcml2S2V5RWQyNTUxOSZxdW90OwogIH0sCiAgJnF1b3Q7bGFzdF9zdGVwJnF1b3Q7IDogMCwKICAmcXVvdDtsYXN0X3JvdW5kJnF1b3Q7IDogJnF1b3Q7MCZxdW90OywKICAmcXVvdDtsYXN0X2hlaWdodCZxdW90OyA6ICZxdW90OzAmcXVvdDsKfQo="}}),e._v(" "),o("p",[e._v("then the new "),o("code",[e._v("genesis.json")]),e._v(" will be:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3ZhbGlkYXRvcnMmcXVvdDsgOiBbCiAgICB7CiAgICAgICZxdW90O3B1Yl9rZXkmcXVvdDsgOiB7CiAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDsgOiAmcXVvdDtoM2hrK1FFOGM2UUxUeVNwOFRjZnpjbEp3L0JHNzl6aUdCL3BJQStEZlBFPSZxdW90OywKICAgICAgICAmcXVvdDt0eXBlJnF1b3Q7IDogJnF1b3Q7dGVuZGVybWludC9QdWJLZXlFZDI1NTE5JnF1b3Q7CiAgICAgIH0sCiAgICAgICZxdW90O3Bvd2VyJnF1b3Q7IDogMTAsCiAgICAgICZxdW90O25hbWUmcXVvdDsgOiAmcXVvdDsmcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O3B1Yl9rZXkmcXVvdDsgOiB7CiAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDsgOiAmcXVvdDtsOVg5K2Zqa2VCekRmUEdiVU03QU1JUkU2dUpONzh6TjUrbGs1T1lvdGVrPSZxdW90OywKICAgICAgICAmcXVvdDt0eXBlJnF1b3Q7IDogJnF1b3Q7dGVuZGVybWludC9QdWJLZXlFZDI1NTE5JnF1b3Q7CiAgICAgIH0sCiAgICAgICZxdW90O3Bvd2VyJnF1b3Q7IDogMTAsCiAgICAgICZxdW90O25hbWUmcXVvdDsgOiAmcXVvdDsmcXVvdDsKICAgIH0KICBdLAogICZxdW90O2FwcF9oYXNoJnF1b3Q7IDogJnF1b3Q7JnF1b3Q7LAogICZxdW90O2NoYWluX2lkJnF1b3Q7IDogJnF1b3Q7dGVzdC1jaGFpbi1yRGxZU04mcXVvdDssCiAgJnF1b3Q7Z2VuZXNpc190aW1lJnF1b3Q7IDogJnF1b3Q7MDAwMS0wMS0wMVQwMDowMDowMFomcXVvdDsKfQo="}}),e._v(" "),o("p",[e._v("Update the "),o("code",[e._v("genesis.json")]),e._v(" in "),o("code",[e._v("~/.tendermint/config")]),e._v(". Copy the genesis\nfile and the new "),o("code",[e._v("priv_validator_key.json")]),e._v(" to the "),o("code",[e._v("~/.tendermint/config")]),e._v(" on\na new machine.")]),e._v(" "),o("p",[e._v("Now run "),o("code",[e._v("tendermint start")]),e._v(" on both machines, and use either\n"),o("code",[e._v("--p2p.persistent-peers")]),e._v(" or the "),o("code",[e._v("/dial_peers")]),e._v(" to get them to peer up.\nThey should start making blocks, and will only continue to do so as long\nas both of them are online.")]),e._v(" "),o("p",[e._v("To make a Tendermint network that can tolerate one of the validators\nfailing, you need at least four validator nodes (e.g., 2/3).")]),e._v(" "),o("p",[e._v("Updating validators in a live network is supported but must be\nexplicitly programmed by the application developer. See the "),o("RouterLink",{attrs:{to:"/app-dev/app-development.html"}},[e._v("application\ndevelopers guide")]),e._v(" for more details.")],1),e._v(" "),o("h3",{attrs:{id:"local-network"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#local-network"}},[e._v("#")]),e._v(" Local Network")]),e._v(" "),o("p",[e._v("To run a network locally, say on a single machine, you must change the "),o("code",[e._v("_laddr")]),e._v("\nfields in the "),o("code",[e._v("config.toml")]),e._v(" (or using the flags) so that the listening\naddresses of the various sockets don't conflict. Additionally, you must set\n"),o("code",[e._v("addr_book_strict=false")]),e._v(" in the "),o("code",[e._v("config.toml")]),e._v(", otherwise Tendermint's p2p\nlibrary will deny making connections to peers with the same IP address.")]),e._v(" "),o("h3",{attrs:{id:"upgrading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[e._v("#")]),e._v(" Upgrading")]),e._v(" "),o("p",[e._v("See the\n"),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/UPGRADING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("UPGRADING.md"),o("OutboundLink")],1),e._v("\nguide. You may need to reset your chain between major breaking releases.\nAlthough, we expect Tendermint to have fewer breaking releases in the future\n(especially after 1.0 release).")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);
<script lang="ts">
import { v4 as uuidv4 } from 'uuid';
// import * as base_profile from '../../public/base_profile.json';
import { parse, serialize } from '@plist/plist';
import { serialize as serializeXML } from '@plist/xml.serialize';

let config: string;
let ip: string = "";
let ip2: string = "";
let blob: Blob;
let url: string;
let DoH: string;
let generate = async () => {
    if(ip === ""){
        return;
    }

    var base_profile = await fetch("/base_profile.json");
    var new_profile = await base_profile.json();
    // var new_profile = base_profile.json();

    // console.log(serializeXML(base_profile))

    new_profile.PayloadDisplayName = `Custom DNS: ${ip}`;
    new_profile.PayloadIdentifier = `${uuidv4()}`;
    new_profile.PayloadUUID = `${uuidv4()}`;
    new_profile.PayloadContent[0].DNSSettings.ServerAddresses[0] = ip;
    new_profile.PayloadContent[0].DNSSettings.ServerAddresses[1] = ip2;
    new_profile.PayloadContent[0].DNSSettings.ServerURL = DoH;
    new_profile.PayloadContent[0].PayloadIdentifier = `${uuidv4()}`;
    new_profile.PayloadContent[0].PayloadUUID = `${uuidv4()}`;
    new_profile.PayloadContent[0].PayloadDisplayName = `Custom DNS: ${ip}`;


//     config = `<?xml version="1.0" encoding="UTF-8"?>
// <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
// <plist version="1.0">
// 	<dict>
// 		<key>PayloadDisplayName</key>
// 		<string>Custom DNS: ${ip}</string>
// 		<key>PayloadOrganization</key>
// 		<string>junengames.ml</string>
// 		<key>PayloadDescription</key>
// 		<string>This profile adds a custom DNS to your iDevice</string>
// 		<key>PayloadIdentifier</key>
// 		<string>${uuidv4()}</string>
// 		<key>PayloadScope</key>
// 		<string>User</string>
// 		<key>PayloadType</key>
// 		<string>Configuration</string>
// 		<key>PayloadUUID</key>
// 		<string>${uuidv4()}</string>
// 		<key>PayloadVersion</key>
// 		<integer>1</integer>
// 		<key>PayloadContent</key>
// 		<array>
// 			<dict>
// 				<key>DNSSettings</key>
// 				<dict>
// 					<key>DNSProtocol</key>
// 					<string>HTTPS</string>
// 					<key>ServerAddresses</key>
// 					<array>
// 						<string>${ip}</string>
//                         <string>${ip2}</string>
// 					</array>
//                     <key>ServerURL</key>
// 					<string>${DoH}</string>
// 				</dict>
// 				<key>PayloadType</key>
// 				<string>com.apple.dnsSettings.managed</string>
// 				<key>PayloadIdentifier</key>
// 				<string>${uuidv4()}</string>
// 				<key>PayloadUUID</key>
// 				<string>${uuidv4()}</string>
// 				<key>PayloadDisplayName</key>
// 				<string>Custom DNS: ${ip}</string>
// 				<key>PayloadVersion</key>
// 				<integer>1</integer>
// 			</dict>
// 		</array>
// 		<key>OnDemandRules</key>
// 		<array>
// 			<dict>
// 				<key>Action</key>
// 				<string>Connect</string>
// 				<key>InterfaceTypeMatch</key>
// 				<string>Cellular</string>
// 			</dict>
// 			<dict>
// 				<key>Action</key>
// 				<string>Connect</string>
// 				<key>URLStringProbe</key>
// 				<string>http://captive.apple.com/hotspot-detect.html</string>
// 			</dict>
// 		</array>
// 	</dict>
// </plist>
// `;
    blob = new Blob([serializeXML(new_profile)], {type: "application/x-apple-aspen-config"})
    
    url = URL.createObjectURL(blob);
}


</script>

<main>
    <p>DNS: </p>
    <input bind:value={ip} on:change={generate} on:keydown={generate}>
    <!-- <button on:click={generate}>Generate!</button> -->
    <p>Fallback DNS: </p>
    <input bind:value={ip2} on:change={generate} on:keydown={generate}>
    <p>DoH Server Name: </p>
    <input bind:value={DoH} on:change={generate} on:keydown={generate}>
    <a href={url} style="display:block">Download!</a>
</main>
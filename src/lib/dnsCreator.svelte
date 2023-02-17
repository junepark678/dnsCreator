<script lang="ts">
import { v4 as uuidv4 } from 'uuid';
let config: string;
let ip: string = "";
let ip2: string = "";
let blob: Blob;
let url: string;
let generate = () => {
    if(ip === ""){
        return;
    }
    config = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
	<dict>
		<key>PayloadDisplayName</key>
		<string>Custom DNS: ${ip}</string>
		<key>PayloadOrganization</key>
		<string>junengames.ml</string>
		<key>PayloadDescription</key>
		<string>This profile adds a custom DNS to your iDevice</string>
		<key>PayloadIdentifier</key>
		<string>${uuidv4()}</string>
		<key>PayloadScope</key>
		<string>User</string>
		<key>PayloadType</key>
		<string>Configuration</string>
		<key>PayloadUUID</key>
		<string>${uuidv4()}</string>
		<key>PayloadVersion</key>
		<integer>1</integer>
		<key>PayloadContent</key>
		<array>
			<dict>
				<key>DNSSettings</key>
				<dict>
					<key>DNSProtocol</key>
					<string>HTTPS</string>
					<key>ServerAddresses</key>
					<array>
						<string>${ip}</string>
                        <string>${ip2}</string>
					</array>
                    <key>ServerURL</key>
					<string>https://junengames.ml</string>
				</dict>
				<key>PayloadType</key>
				<string>com.apple.dnsSettings.managed</string>
				<key>PayloadIdentifier</key>
				<string>${uuidv4()}</string>
				<key>PayloadUUID</key>
				<string>${uuidv4()}</string>
				<key>PayloadDisplayName</key>
				<string>Custom DNS</string>
				<key>PayloadVersion</key>
				<integer>1</integer>
			</dict>
		</array>
		<key>OnDemandRules</key>
		<array>
			<dict>
				<key>Action</key>
				<string>Connect</string>
				<key>InterfaceTypeMatch</key>
				<string>Cellular</string>
			</dict>
			<dict>
				<key>Action</key>
				<string>Connect</string>
				<key>URLStringProbe</key>
				<string>http://captive.apple.com/hotspot-detect.html</string>
			</dict>
		</array>
	</dict>
</plist>
`;
    blob = new Blob([config], {type: "application/x-apple-aspen-config"})
    
    url = URL.createObjectURL(blob);
}


</script>

<main>
    <p>DNS: </p>
    <input bind:value={ip} on:change={generate} on:keydown={generate}>
    <!-- <button on:click={generate}>Generate!</button> -->
    <p>{ip}</p>
    <p>Fallback DNS: </p>
    <input bind:value={ip2} on:change={generate} on:keydown={generate}>
    <a href={url} style="display:block">Download!</a>
</main>
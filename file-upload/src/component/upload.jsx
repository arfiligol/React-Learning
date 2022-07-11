import React, { Component } from "react";
import { Box } from "@chakra-ui/react";

class UploadFile extends Component {
    state = {};
    render() {
        return (
            <Box w="100px" height="100px" p={4} color="black">
                <form
                    action="http://dentons.arfiligol.xn--kpry57d:5000"
                    method="post"
                    enctype="multipart/form-data"
                >
                    <input type="file" name="uploadFile" />
                    <input type="submit" value="submit" />
                </form>
            </Box>
        );
    }
}

export default UploadFile;

import { unprocessableEntityError } from "../errors/unprocessableEntity.error.js"
import { notFoundError } from "../errors/notFound.error.js"

export function validateSchema(schema) {

    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            if (errors[0] === '"origin" must be less than or equal to 5') throw notFoundError("cidade de origem");
            if (errors[0] === '"destination" must be less than or equal to 5') throw notFoundError("cidade de destino");
            if (errors[0] === '"date" must be in [DD-MM-YYYY] format') throw unprocessableEntityError("`data no formato incorreto!, must be in [DD-MM-YYYY] format`");

            console.log(errors[0])
            return res.status(500).send(errors);
        }

        next()
    }
}